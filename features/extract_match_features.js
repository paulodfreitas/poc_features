var mapping = require("./mapping");

const TEAM = {
    RADIANT  : {
        name : "RADIANT",
        playersSlots : [0, 1, 2, 3, 4]
    },
    DIRE     : {
        name : "DIRE",
        playersSlots : [128, 129, 130, 131, 132]
    }
};

function numOrder (a, b) {
    return a - b;
}

function listSum(list) {
    return list.reduce(function(a, b) { return a + b; }, 0)
}

function listAverage(list) {
    return listSum(list) / list.length;
}

function getIsPlayerInTeam(team) {
    return function(player) {
        return team.playersSlots.indexOf(player.player_slot) != -1;
    };
}

function getPlayersOfTeam(match, team) {
    return match.players.filter(getIsPlayerInTeam(team));
}

function extractPreGameFeatures(match, team) {
    var teamRoleCount = {};
    teamRoleCount[mapping.roles.CARRY]     = 0;
    teamRoleCount[mapping.roles.NUKER]     = 0;
    teamRoleCount[mapping.roles.INITIATOR] = 0;
    teamRoleCount[mapping.roles.DISABLER]  = 0;
    teamRoleCount[mapping.roles.DURABLE]   = 0;
    teamRoleCount[mapping.roles.ESCAPE]    = 0;
    teamRoleCount[mapping.roles.SUPPORT]   = 0;
    teamRoleCount[mapping.roles.PUSHER]    = 0;
    teamRoleCount[mapping.roles.JUNGLER]   = 0;

    getPlayersOfTeam(match, team).forEach(function(player) {
        var hero = mapping.heroes.find(function(hero) { return player.hero_id == hero.id; });
        hero.roles.forEach(function(heroRole) {
            teamRoleCount[heroRole]++;
        });
    });

    var roleCountAsArray = [];
    for (var heroRole in teamRoleCount) {
        if (teamRoleCount.hasOwnProperty(heroRole)) {
            roleCountAsArray.push(teamRoleCount[heroRole]);
        }
    }

    return roleCountAsArray;
}

function extractLaneSetupFeatures(match, team) {
    //missing in this version of dump.
    return [];
}

function extractFarmingFeatures(match, team) {
    var xpmValues = [];
    var gpmValues = [];
    getPlayersOfTeam(match, team).forEach(function(player) {
        xpmValues.push(player.xp_per_min);
        gpmValues.push(player.gold_per_min);
    });

    xpmValues.sort(numOrder);
    gpmValues.sort(numOrder);

    return [
        Math.max(...xpmValues),
        listAverage(xpmValues),
        Math.min(...xpmValues),
        xpmValues[2] - xpmValues[1], //diff between least farmed core and most farmed sup
        Math.max(...gpmValues),
        listAverage(gpmValues),
        Math.min(...gpmValues),
        gpmValues[2] - gpmValues[1] //diff between least farmed core and most farmed sup
    ];
}

function purchaseToTuple(o) {
    var tupleList = [];
    for(var key in o) {
        if (o.hasOwnProperty(key)) {
            tupleList.push({
                "itemName"  : key,
                "times" : o[key]
            });
        }
    }

    return tupleList;
}

function filterByItemType(purchaseEntry, itemType) {
    return purchaseEntry.itemName in mapping.items ? mapping.items[purchaseEntry.itemName].qual == itemType : false;
}

function isConsumable(purchaseEntry) {
    return filterByItemType(purchaseEntry, mapping.itemType.CONSUMABLE);
}

function isSupportGroup(purchaseEntry) {
    return filterByItemType(purchaseEntry, mapping.itemType.SUPPORT);
}

function getItemValue(purchaseEntry) {
    return mapping.items[purchaseEntry.itemName].cost * purchaseEntry.times;
}

function extractItemsFeatures(match, team) {
    var players = getPlayersOfTeam(match, team);
    return [
        // total gold spent
        listSum(players.map(function(p) { return p.gold_spent; })),
        // total gold spend with consumables
        listSum(players.map(function(p) { return listSum(purchaseToTuple(p.purchase).filter(isConsumable).map(getItemValue)); })),
        // total gold spend with support items
        listSum(players.map(function(p) { return listSum(purchaseToTuple(p.purchase).filter(isSupportGroup).map(getItemValue)); }))
    ];
}

function extractCombatFeatures(match, team) {
    return [
        match.teamfights.length,
        listSum(match.teamfights.map(function(fight) { return fight.deaths; })),
        listAverage(match.teamfights.map(function(fight) { return fight.deaths; })),
        listAverage(match.teamfights.map(function(fight) { return fight.end - fight.start; })),
        listAverage(match.teamfights.map(function(fight) {
            return fight.players.filter(function(player) {
                return player.deaths > 0 || player.damage > 0 || Object.keys(player.ability_uses).length
            }).length;
        }))
    ];
}

function extractObjectFeatures(match, team) {

    function getNrTowerDestroyed(towerStatus) {
        const nrTowers = 11;
        var nrTowersDestroyed = 0;
        for(var i = 0; i < nrTowers; i++) {
            if ((towerStatus & Math.pow(2, i)) == 0) {
                nrTowersDestroyed++;
            }
        }

        return nrTowersDestroyed;
    }

    var playersOfTeam = getPlayersOfTeam(match, team);
    return [
        // nr roshan killed
        listSum(playersOfTeam.map(function(player) {
            return 'npc_dota_roshan' in player.killed ? player.killed['npc_dota_roshan'] : 0;
        })),
        // nr runes picked
        listSum(playersOfTeam.map(function(player) {
            var nrRunesPickedByPlayer = 0;
            for(var runeId in player.runes) {
                if (player.runes.hasOwnProperty(runeId)) {
                    nrRunesPickedByPlayer += player.runes[runeId];
                }
            }

            return nrRunesPickedByPlayer;
        })),
        // nr enemy's tower destroyed
        getNrTowerDestroyed(
            team.name == TEAM.RADIANT.name ? match.tower_status_dire : match.tower_status_radiant
        ),
        // nr team's tower destroyed
        getNrTowerDestroyed(
            team.name == TEAM.RADIANT.name ? match.tower_status_radiant : match.tower_status_dire
        ),
        // time of first tower
        match.objectives.find(function(objective) {
            return objective.subtype === 'CHAT_MESSAGE_TOWER_KILL';
        }).time
    ];
}

function extractClassFeatures(match, team) {
    return [
        match.match_id,
        match.lobby_type,   //lobby vs public match making
        match.game_mode,    //ranked x casual | ap x cm x others
        match.cluster,      //region
        match.leagueid,     //champ or not
        match.skill,        //normal, high, very high
        team.name
    ];
}

function extractGlobalFeatures(match, team) {
    return [
        match.duration,
        team.name == TEAM.RADIANT.name ? match.radiant_win : !match.radiant_win
    ];
}

function extractMatchFeatures(match, team) {
    return extractClassFeatures(match, team)
        .concat(extractGlobalFeatures(match, team))
        .concat(extractPreGameFeatures(match, team))
        .concat(extractLaneSetupFeatures(match, team))
        .concat(extractFarmingFeatures(match, team))
        .concat(extractItemsFeatures(match, team))
        .concat(extractCombatFeatures(match, team))
        .concat(extractObjectFeatures(match, team));
}


module.exports  = function(match) {
    return {
        "RADIANT" : extractMatchFeatures(match, TEAM.RADIANT),
        "DIRE" : extractMatchFeatures(match, TEAM.DIRE)
    };
};