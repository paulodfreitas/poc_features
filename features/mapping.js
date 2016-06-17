var ROLES = {
    CARRY       : 1,
    NUKER       : 2,
    INITIATOR   : 3,
    DISABLER    : 4,
    DURABLE     : 5,
    ESCAPE      : 6,
    SUPPORT     : 7,
    PUSHER      : 8,
    JUNGLER     : 9
};

var heroes = [
    {
        "name": "npc_dota_hero_antimage",
        "id": 1,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.NUKER],
        "localized_name": "Anti-Mage"
    },
    {
        "name": "npc_dota_hero_axe",
        "id": 2,
        "roles" : [ROLES.INITIATOR, ROLES.DURABLE, ROLES.DISABLER, ROLES.JUNGLER],
        "localized_name": "Axe"
    },
    {
        "name": "npc_dota_hero_bane",
        "id": 3,
        "roles" : [ROLES.SUPPORT, ROLES.DISABLER, ROLES.NUKER, ROLES.DURABLE],
        "localized_name": "Bane"
    },
    {
        "name": "npc_dota_hero_bloodseeker",
        "id": 4,
        "roles" : [ROLES.CARRY, ROLES.DISABLER, ROLES.JUNGLER, ROLES.NUKER, ROLES.INITIATOR],
        "localized_name": "Bloodseeker"
    },
    {
        "name": "npc_dota_hero_crystal_maiden",
        "id": 5,
        "roles" : [ROLES.SUPPORT, ROLES.DISABLER, ROLES.NUKER, ROLES.JUNGLER],
        "localized_name": "Crystal Maiden"
    },
    {
        "name": "npc_dota_hero_drow_ranger",
        "id": 6,
        "roles" : [ROLES.CARRY, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Drow Ranger"
    },
    {
        "name": "npc_dota_hero_earthshaker",
        "id": 7,
        "roles" : [ROLES.SUPPORT, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Earthshaker"
    },
    {
        "name": "npc_dota_hero_juggernaut",
        "id": 8,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.PUSHER],
        "localized_name": "Juggernaut"
    },
    {
        "name": "npc_dota_hero_mirana",
        "id": 9,
        "roles" : [ROLES.CARRY, ROLES.SUPPORT, ROLES.ESCAPE, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Mirana"
    },
    {
        "name": "npc_dota_hero_nevermore",
        "id": 11,
        "roles" : [ROLES.CARRY, ROLES.NUKER],
        "localized_name": "Shadow Fiend"
    },
    {
        "name": "npc_dota_hero_morphling",
        "id": 10,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.DURABLE, ROLES.NUKER,  ROLES.DISABLER],
        "localized_name": "Morphling"
    },
    {
        "name": "npc_dota_hero_phantom_lancer",
        "id": 12,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.PUSHER, ROLES.NUKER],
        "localized_name": "Phantom Lancer"
    },
    {
        "name": "npc_dota_hero_puck",
        "id": 13,
        "roles" : [ROLES.INITIATOR, ROLES.ESCAPE, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Puck"
    },
    {
        "name": "npc_dota_hero_pudge",
        "id": 14,
        "roles" : [ROLES.DURABLE, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Pudge"
    },
    {
        "name": "npc_dota_hero_razor",
        "id": 15,
        "roles" : [ROLES.DURABLE, ROLES.CARRY, ROLES.PUSHER, ROLES.NUKER],
        "localized_name": "Razor"
    },
    {
        "name": "npc_dota_hero_sand_king",
        "id": 16,
        "roles" : [ROLES.JUNGLER, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.ESCAPE],
        "localized_name": "Sand King"
    },
    {
        "name": "npc_dota_hero_storm_spirit",
        "id": 17,
        "roles" : [ROLES.CARRY, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.ESCAPE],
        "localized_name": "Storm Spirit"
    },
    {
        "name": "npc_dota_hero_sven",
        "id": 18,
        "roles" : [ROLES.CARRY, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.DURABLE],
        "localized_name": "Sven"
    },
    {
        "name": "npc_dota_hero_tiny",
        "id": 19,
        "roles" : [ROLES.CARRY, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.DURABLE, ROLES.PUSHER],
        "localized_name": "Tiny"
    },
    {
        "name": "npc_dota_hero_vengefulspirit",
        "id": 20,
        "roles" : [ROLES.SUPPORT, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.ESCAPE],
        "localized_name": "Vengeful Spirit"
    },
    {
        "name": "npc_dota_hero_windrunner",
        "id": 21,
        "roles" : [ROLES.SUPPORT, ROLES.CARRY, ROLES.DISABLER, ROLES.NUKER, ROLES.ESCAPE],
        "localized_name": "Windranger"
    },
    {
        "name": "npc_dota_hero_zuus",
        "id": 22,
        "roles" : [ROLES.NUKER],
        "localized_name": "Zeus"
    },
    {
        "name": "npc_dota_hero_kunkka",
        "id": 23,
        "roles" : [ROLES.CARRY, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER, ROLES.DURABLE],
        "localized_name": "Kunkka"
    },
    {
        "name": "npc_dota_hero_lina",
        "id": 25,
        "roles" : [ROLES.SUPPORT, ROLES.CARRY, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Lina"
    },
    {
        "name": "npc_dota_hero_lich",
        "id": 31,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER],
        "localized_name": "Lich"
    },
    {
        "name": "npc_dota_hero_lion",
        "id": 26,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Lion"
    },
    {
        "name": "npc_dota_hero_shadow_shaman",
        "id": 27,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER, ROLES.PUSHER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Shadow Shaman"
    },
    {
        "name": "npc_dota_hero_slardar",
        "id": 28,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.INITIATOR, ROLES.DISABLER, ROLES.ESCAPE],
        "localized_name": "Slardar"
    },
    {
        "name": "npc_dota_hero_tidehunter",
        "id": 29,
        "roles" : [ROLES.DURABLE, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Tidehunter"
    },
    {
        "name": "npc_dota_hero_witch_doctor",
        "id": 30,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER, ROLES.DISABLER],
        "localized_name": "Witch Doctor"
    },
    {
        "name": "npc_dota_hero_riki",
        "id": 32,
        "roles" : [ROLES.CARRY, ROLES.DISABLER, ROLES.ESCAPE],
        "localized_name": "Riki"
    },
    {
        "name": "npc_dota_hero_enigma",
        "id": 33,
        "roles" : [ROLES.JUNGLER, ROLES.PUSHER, ROLES.INITIATOR, ROLES.DISABLER],
        "localized_name": "Enigma"
    },
    {
        "name": "npc_dota_hero_tinker",
        "id": 34,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.PUSHER],
        "localized_name": "Tinker"
    },
    {
        "name": "npc_dota_hero_sniper",
        "id": 35,
        "roles" : [ROLES.CARRY, ROLES.NUKER],
        "localized_name": "Sniper"
    },
    {
        "name": "npc_dota_hero_necrolyte",
        "id": 36,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.DURABLE, ROLES.DISABLER],
        "localized_name": "Necrophos"
    },
    {
        "name": "npc_dota_hero_warlock",
        "id": 37,
        "roles" : [ROLES.SUPPORT, ROLES.INITIATOR, ROLES.DISABLER],
        "localized_name": "Warlock"
    },
    {
        "name": "npc_dota_hero_beastmaster",
        "id": 38,
        "roles" : [ROLES.DURABLE, ROLES.INITIATOR, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Beastmaster"
    },
    {
        "name": "npc_dota_hero_queenofpain",
        "id": 39,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.ESCAPE],
        "localized_name": "Queen of Pain"
    },
    {
        "name": "npc_dota_hero_venomancer",
        "id": 40,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER, ROLES.INITIATOR, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Venomancer"
    },
    {
        "name": "npc_dota_hero_faceless_void",
        "id": 41,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.INITIATOR, ROLES.DISABLER, ROLES.ESCAPE],
        "localized_name": "Faceless Void"
    },
    {
        "name": "npc_dota_hero_skeleton_king",
        "id": 42,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Wraith King"
    },
    {
        "name": "npc_dota_hero_death_prophet",
        "id": 43,
        "roles" : [ROLES.CARRY, ROLES.PUSHER, ROLES.NUKER, ROLES.DISABLER],
        "localized_name": "Death Prophet"
    },
    {
        "name": "npc_dota_hero_phantom_assassin",
        "id": 44,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE],
        "localized_name": "Phantom Assassin"
    },
    {
        "name": "npc_dota_hero_pugna",
        "id": 45,
        "roles" : [ROLES.NUKER, ROLES.PUSHER],
        "localized_name": "Pugna"
    },
    {
        "name": "npc_dota_hero_templar_assassin",
        "id": 46,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE],
        "localized_name": "Templar Assassin"
    },
    {
        "name": "npc_dota_hero_viper",
        "id": 47,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Viper"
    },
    {
        "name": "npc_dota_hero_luna",
        "id": 48,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.PUSHER],
        "localized_name": "Luna"
    },
    {
        "name": "npc_dota_hero_dragon_knight",
        "id": 49,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.PUSHER, ROLES.DISABLER, ROLES.INITIATOR, ROLES.NUKER],
        "localized_name": "Dragon Knight"
    },
    {
        "name": "npc_dota_hero_dazzle",
        "id": 50,
        "roles" : [ROLES.SUPPORT, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Dazzle"
    },
    {
        "name": "npc_dota_hero_rattletrap",
        "id": 51,
        "roles" : [ROLES.DURABLE, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Clockwerk"
    },
    {
        "name": "npc_dota_hero_leshrac",
        "id": 52,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Leshrac"
    },
    {
        "name": "npc_dota_hero_furion",
        "id": 53,
        "roles" : [ROLES.CARRY, ROLES.JUNGLER, ROLES.PUSHER, ROLES.ESCAPE, ROLES.NUKER],
        "localized_name": "Nature's Prophet"
    },
    {
        "name": "npc_dota_hero_life_stealer",
        "id": 54,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.JUNGLER, ROLES.ESCAPE, ROLES.DISABLER],
        "localized_name": "Lifestealer"
    },
    {
        "name": "npc_dota_hero_dark_seer",
        "id": 55,
        "roles" : [ROLES.ESCAPE, ROLES.JUNGLER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Dark Seer"
    },
    {
        "name": "npc_dota_hero_clinkz",
        "id": 56,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.PUSHER],
        "localized_name": "Clinkz"
    },
    {
        "name": "npc_dota_hero_omniknight",
        "id": 57,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.SUPPORT],
        "localized_name": "Omniknight"
    },
    {
        "name": "npc_dota_hero_enchantress",
        "id": 58,
        "roles" : [ROLES.JUNGLER, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Enchantress"
    },
    {
        "name": "npc_dota_hero_huskar",
        "id": 59,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.INITIATOR],
        "localized_name": "Huskar"
    },
    {
        "name": "npc_dota_hero_night_stalker",
        "id": 60,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Night Stalker"
    },
    {
        "name": "npc_dota_hero_broodmother",
        "id": 61,
        "roles" : [ROLES.CARRY, ROLES.PUSHER, ROLES.ESCAPE, ROLES.NUKER],
        "localized_name": "Broodmother"
    },
    {
        "name": "npc_dota_hero_bounty_hunter",
        "id": 62,
        "roles" : [ROLES.ESCAPE, ROLES.NUKER],
        "localized_name": "Bounty Hunter"
    },
    {
        "name": "npc_dota_hero_weaver",
        "id": 63,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE],
        "localized_name": "Weaver"
    },
    {
        "name": "npc_dota_hero_jakiro",
        "id": 64,
        "roles" : [ROLES.PUSHER, ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER],
        "localized_name": "Jakiro"
    },
    {
        "name": "npc_dota_hero_batrider",
        "id": 65,
        "roles" : [ROLES.JUNGLER, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Batrider"
    },
    {
        "name": "npc_dota_hero_chen",
        "id": 66,
        "roles" : [ROLES.SUPPORT, ROLES.JUNGLER, ROLES.PUSHER],
        "localized_name": "Chen"
    },
    {
        "name": "npc_dota_hero_spectre",
        "id": 67,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.ESCAPE],
        "localized_name": "Spectre"
    },
    {
        "name": "npc_dota_hero_doom_bringer",
        "id": 69,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Doom"
    },
    {
        "name": "npc_dota_hero_ancient_apparition",
        "id": 68,
        "roles" : [ROLES.SUPPORT, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Ancient Apparition"
    },
    {
        "name": "npc_dota_hero_ursa",
        "id": 70,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.JUNGLER, ROLES.DISABLER],
        "localized_name": "Ursa"
    },
    {
        "name": "npc_dota_hero_spirit_breaker",
        "id": 71,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Spirit Breaker"
    },
    {
        "name": "npc_dota_hero_gyrocopter",
        "id": 72,
        "roles" : [ROLES.CARRY, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Gyrocopter"
    },
    {
        "name": "npc_dota_hero_alchemist",
        "id": 73,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR, ROLES.NUKER],
        "localized_name": "Alchemist"
    },
    {
        "name": "npc_dota_hero_invoker",
        "id": 74,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.ESCAPE, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Invoker"
    },
    {
        "name": "npc_dota_hero_silencer",
        "id": 75,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Silencer"
    },
    {
        "name": "npc_dota_hero_obsidian_destroyer",
        "id": 76,
        "roles" : [ROLES.CARRY, ROLES.NUKER, ROLES.DISABLER],
        "localized_name": "Outworld Devourer"
    },
    {
        "name": "npc_dota_hero_lycan",
        "id": 77,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.PUSHER, ROLES.JUNGLER, ROLES.ESCAPE],
        "localized_name": "Lycan"
    },
    {
        "name": "npc_dota_hero_brewmaster",
        "id": 78,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Brewmaster"
    },
    {
        "name": "npc_dota_hero_shadow_demon",
        "id": 79,
        "roles" : [ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Shadow Demon"
    },
    {
        "name": "npc_dota_hero_lone_druid",
        "id": 80,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.JUNGLER, ROLES.PUSHER],
        "localized_name": "Lone Druid"
    },
    {
        "name": "npc_dota_hero_chaos_knight",
        "id": 81,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.PUSHER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Chaos Knight"
    },
    {
        "name": "npc_dota_hero_meepo",
        "id": 82,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR, ROLES.PUSHER],
        "localized_name": "Meepo"
    },
    {
        "name": "npc_dota_hero_treant",
        "id": 83,
        "roles" : [ROLES.SUPPORT, ROLES.DURABLE, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Treant Protector"
    },
    {
        "name": "npc_dota_hero_ogre_magi",
        "id": 84,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Ogre Magi"
    },
    {
        "name": "npc_dota_hero_undying",
        "id": 85,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER],
        "localized_name": "Undying"
    },
    {
        "name": "npc_dota_hero_rubick",
        "id": 86,
        "roles" : [ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER],
        "localized_name": "Rubick"
    },
    {
        "name": "npc_dota_hero_disruptor",
        "id": 87,
        "roles" : [ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Disruptor"
    },
    {
        "name": "npc_dota_hero_nyx_assassin",
        "id": 88,
        "roles" : [ROLES.NUKER, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Nyx Assassin"
    },
    {
        "name": "npc_dota_hero_naga_siren",
        "id": 89,
        "roles" : [ROLES.CARRY, ROLES.PUSHER, ROLES.ESCAPE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Naga Siren"
    },
    {
        "name": "npc_dota_hero_keeper_of_the_light",
        "id": 90,
        "roles" : [ROLES.NUKER, ROLES.JUNGLER, ROLES.SUPPORT, ROLES.DISABLER],
        "localized_name": "Keeper of the Light"
    },
    {
        "name": "npc_dota_hero_wisp",
        "id": 91,
        "roles" : [ROLES.ESCAPE, ROLES.SUPPORT, ROLES.NUKER],
        "localized_name": "Io"
    },
    {
        "name": "npc_dota_hero_visage",
        "id": 92,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.SUPPORT, ROLES.DISABLER, ROLES.PUSHER],
        "localized_name": "Visage"
    },
    {
        "name": "npc_dota_hero_slark",
        "id": 93,
        "roles" : [ROLES.CARRY, ROLES.ESCAPE, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Slark"
    },
    {
        "name": "npc_dota_hero_medusa",
        "id": 94,
        "roles" : [ROLES.CARRY, ROLES.DISABLER, ROLES.DURABLE],
        "localized_name": "Medusa"
    },
    {
        "name": "npc_dota_hero_troll_warlord",
        "id": 95,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.PUSHER, ROLES.DISABLER],
        "localized_name": "Troll Warlord"
    },
    {
        "name": "npc_dota_hero_centaur",
        "id": 96,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Centaur Warrunner"
    },
    {
        "name": "npc_dota_hero_magnataur",
        "id": 97,
        "roles" : [ROLES.NUKER, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Magnus"
    },
    {
        "name": "npc_dota_hero_shredder",
        "id": 98,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.ESCAPE],
        "localized_name": "Timbersaw"
    },
    {
        "name": "npc_dota_hero_bristleback",
        "id": 99,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.CARRY, ROLES.INITIATOR],
        "localized_name": "Bristleback"
    },
    {
        "name": "npc_dota_hero_tusk",
        "id": 100,
        "roles" : [ROLES.NUKER, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Tusk"
    },
    {
        "name": "npc_dota_hero_skywrath_mage",
        "id": 101,
        "roles" : [ROLES.NUKER, ROLES.SUPPORT, ROLES.DISABLER],
        "localized_name": "Skywrath Mage"
    },
    {
        "name": "npc_dota_hero_abaddon",
        "id": 102,
        "roles" : [ROLES.CARRY, ROLES.DURABLE, ROLES.SUPPORT],
        "localized_name": "Abaddon"
    },
    {
        "name": "npc_dota_hero_elder_titan",
        "id": 103,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Elder Titan"
    },
    {
        "name": "npc_dota_hero_legion_commander",
        "id": 104,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.CARRY, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Legion Commander"
    },
    {
        "name": "npc_dota_hero_ember_spirit",
        "id": 106,
        "roles" : [ROLES.NUKER, ROLES.CARRY, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Ember Spirit"
    },
    {
        "name": "npc_dota_hero_earth_spirit",
        "id": 107,
        "roles" : [ROLES.NUKER, ROLES.DURABLE, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Earth Spirit"
    },
    {
        "name": "npc_dota_hero_terrorblade",
        "id": 109,
        "roles" : [ROLES.NUKER, ROLES.CARRY, ROLES.PUSHER],
        "localized_name": "Terrorblade"
    },
    {
        "name": "npc_dota_hero_phoenix",
        "id": 110,
            "roles" : [ROLES.NUKER, ROLES.SUPPORT, ROLES.ESCAPE, ROLES.DISABLER, ROLES.INITIATOR],
        "localized_name": "Phoenix"
    },
    {
        "name": "npc_dota_hero_oracle",
        "id": 111,
        "roles" : [ROLES.SUPPORT, ROLES.NUKER, ROLES.DISABLER, ROLES.ESCAPE],
        "localized_name": "Oracle"
    },
    {
        "name": "npc_dota_hero_techies",
        "id": 105,
        "roles" : [ROLES.NUKER, ROLES.DISABLER],
        "localized_name": "Techies"
    },
    {
        "name": "npc_dota_hero_winter_wyvern",
        "id": 112,
        "roles" : [ROLES.SUPPORT, ROLES.DISABLER, ROLES.NUKER],
        "localized_name": "Winter Wyvern"

    },
    {
        "name": "npc_dota_hero_arc_warden",
        "id": 113,
        "roles" : [ROLES.ESCAPE, ROLES.CARRY, ROLES.NUKER],
        "localized_name": "Arc Warden"
    }
];

module.exports = {
    "heroes" : heroes,  
    "roles"  : ROLES
};