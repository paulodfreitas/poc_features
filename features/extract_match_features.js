var mapping = require("./mapping");

function numOrder (a, b) {
    return a - b;
}

function listAverage(list) {
    return list.reduce(function(a, b) { return a + b; }, 0) / list.length;
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

function extractCombatFeatures(match, team) {
    return [];
}

function extractObjectFeatures(match, team) {
    return [];
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

function extractMatchFeatures(match, team) {
    return extractClassFeatures(match, team)
        .concat(extractPreGameFeatures(match, team))
        .concat(extractLaneSetupFeatures(match, team))
        .concat(extractFarmingFeatures(match, team))
        .concat(extractCombatFeatures(match, team))
        .concat(extractObjectFeatures(match, team));
}

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



module.exports  = function(match) {
    return {
        "RADIANT" : extractMatchFeatures(match, TEAM.RADIANT),
        "DIRE" : extractMatchFeatures(match, TEAM.DIRE)
    };
};