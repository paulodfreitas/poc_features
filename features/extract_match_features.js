var mapping = require("./mapping");
const InvalidMatch = require("./invalidMatch");

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
    return list.length ? listSum(list) / list.length : 0;
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

function extractGoldSourcesFeatures(match, team) {
    var players = getPlayersOfTeam(match, team);
    return [
        listSum(players.map(function (p) { return mapping.gold.CREEP in p.gold_reasons ? p.gold_reasons[mapping.gold.CREEP] : 0; })),
        listSum(players.map(function (p) { return mapping.gold.ROSHAN in p.gold_reasons ? p.gold_reasons[mapping.gold.ROSHAN] : 0; })),
        listSum(players.map(function (p) { return mapping.gold.HERO in p.gold_reasons ? p.gold_reasons[mapping.gold.HERO] : 0; })),
        listSum(players.map(function (p) { return mapping.gold.STRUCUTURE in p.gold_reasons ? p.gold_reasons[mapping.gold.STRUCUTURE] : 0; }))
    ];
}

function extractFarmingPriorityFeatures(match, team) {
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
    var firstTowerKill = null;
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
        (firstTowerKill = match.objectives.find(function(objective) {
            return objective.subtype === 'CHAT_MESSAGE_TOWER_KILL'
                || objective.type === 'CHAT_MESSAGE_TOWER_KILL';

        })) ? firstTowerKill.time : match.duration
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
    var win = team.name == TEAM.RADIANT.name ? match.radiant_win : !match.radiant_win
    return [
        match.duration,
        win ? 1 : 0
    ];
}

function validateAbandonedPlayers(match) {
    if (match.players.find(function(p) {
        return p.leaver_status != 0;
    })) {
        throw new InvalidMatch("Match not fully played.", InvalidMatch.CODE_NOT_FULLY_PLAYED);
    }
}

function validateHeroPicks(match) {
    if (match.players.find(function(p) {
        return p.hero_id == 0;
    })) {
        throw new InvalidMatch("Not all players played!.", InvalidMatch.CODE_PLAYER_DONT_PLAYED);
    }
}

function validateWeirdMatches(match) {
    var weirdMatchIds = [1997183014, 1964166550];
    if (weirdMatchIds.indexOf(match.match_id) != -1) {
        throw new InvalidMatch("Weird match", InvalidMatch.CODE_WEIRD_MATCH)
    }
}

function validateMissingDataMatch(match) {
    if (match.players.find(function(p) {
            return p.gold_reasons == null;
        })) {
        throw new InvalidMatch("Missing data.", InvalidMatch.CODE_MISSING_DATA);
    }

}

function extractMatchFeatures(match, team) {
    validateAbandonedPlayers(match);
    validateHeroPicks(match);
    validateMissingDataMatch(match);
    validateWeirdMatches(match);
    return extractClassFeatures(match, team)
        .concat(extractGlobalFeatures(match, team))
        .concat(extractPreGameFeatures(match, team))
        .concat(extractLaneSetupFeatures(match, team))
        .concat(extractFarmingPriorityFeatures(match, team))
        .concat(extractGoldSourcesFeatures(match, team))
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