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

var items = {
    "blink": {
        "id": 1,
        "img": "blink_lg.png?3",
        "dname": "Blink Dagger",
        "qual": "component",
        "cost": 2250,
        "desc": "Active: Blink - Teleport to a target point up to 1200 units away.  If damage is taken, Blink Dagger cannot be used for 3.0 seconds.",
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.<br />If you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": "",
        "mc": false,
        "cd": 12,
        "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "components": null,
        "created": false
    },
    "blades_of_attack": {
        "id": 2,
        "img": "blades_of_attack_lg.png?3",
        "dname": "Blades of Attack",
        "qual": "component",
        "cost": 420,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "The damage of these small, concealable blades should not be underestimated.",
        "components": null,
        "created": false
    },
    "broadsword": {
        "id": 3,
        "img": "broadsword_lg.png?3",
        "dname": "Broadsword",
        "qual": "component",
        "cost": 1200,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">18</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.",
        "components": null,
        "created": false
    },
    "chainmail": {
        "id": 4,
        "img": "chainmail_lg.png?3",
        "dname": "Chainmail",
        "qual": "component",
        "cost": 550,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span>",
        "mc": false,
        "cd": false,
        "lore": "A medium weave of metal chains.",
        "components": null,
        "created": false
    },
    "claymore": {
        "id": 5,
        "img": "claymore_lg.png?3",
        "dname": "Claymore",
        "qual": "component",
        "cost": 1400,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">21</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
        "components": null,
        "created": false
    },
    "helm_of_iron_will": {
        "id": 6,
        "img": "helm_of_iron_will_lg.png?3",
        "dname": "Helm of Iron Will",
        "qual": "component",
        "cost": 900,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "The helmet of a legendary warrior who fell in battle.",
        "components": null,
        "created": false
    },
    "javelin": {
        "id": 7,
        "img": "javelin_lg.png?3",
        "dname": "Javelin",
        "qual": "component",
        "cost": 1500,
        "desc": "Passive: Pierce - Grants each attack a chance to deal bonus damage.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\nCHANCE TO PIERCE: <span class=\"attribVal\">25%</span><br />\nPIERCE DAMAGE: <span class=\"attribVal\">85</span>",
        "mc": false,
        "cd": false,
        "lore": "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
        "components": null,
        "created": false
    },
    "mithril_hammer": {
        "id": 8,
        "img": "mithril_hammer_lg.png?3",
        "dname": "Mithril Hammer",
        "qual": "component",
        "cost": 1600,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "A hammer forged of pure mithril.",
        "components": null,
        "created": false
    },
    "platemail": {
        "id": 9,
        "img": "platemail_lg.png?3",
        "dname": "Platemail",
        "qual": "secret_shop",
        "cost": 1400,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span>",
        "mc": false,
        "cd": false,
        "lore": "Thick metal plates that protect the entire upper body. Avoid dropping on feet.",
        "components": null,
        "created": false
    },
    "quarterstaff": {
        "id": 10,
        "img": "quarterstaff_lg.png?3",
        "dname": "Quarterstaff",
        "qual": "component",
        "cost": 875,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "A basic staff that allows you to strike quickly.",
        "components": null,
        "created": false
    },
    "quelling_blade": {
        "id": 11,
        "img": "quelling_blade_lg.png?3",
        "dname": "Quelling Blade",
        "qual": "component",
        "cost": 200,
        "desc": "Active: Chop Tree/Ward - Destroy a target tree or ward. Chop cast range is increased when targetting wards.<br />\r\nPassive: Quell - Increases attack damage against non-hero units, based on whether the equipped hero is ranged or melee. Does not provide bonus damage against Roshan.",
        "notes": "Cannot carry more than one.<br />Chop can be used to destroy Techies' Land Mines and Remote Mines.",
        "attrib": "QUELL MELEE DAMAGE: <span class=\"attribVal\">140%</span><br />\nQUELL RANGED DAMAGE: <span class=\"attribVal\">115%</span><br />\nCHOP TREE CAST RANGE: <span class=\"attribVal\">350</span><br />\nCHOP WARD CAST RANGE: <span class=\"attribVal\">450</span>",
        "mc": false,
        "cd": 4,
        "lore": "The axe of a fallen gnome, it allows you to effectively maneuver the forest.",
        "components": null,
        "created": false
    },
    "faerie_fire": {
        "id": 237,
        "img": "faerie_fire_lg.png?3",
        "dname": "Faerie Fire",
        "qual": "component",
        "cost": 75,
        "desc": "Use: Consume the Faerie Fire to instantly restore 75 HP",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Damage</span><br />\nHEALTH RESTORED: <span class=\"attribVal\">75</span>",
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": null,
        "created": false
    },
    "infused_raindrop": {
        "id": 265,
        "img": "infused_raindrop_lg.png?3",
        "dname": "Infused Raindrop",
        "qual": "component",
        "cost": 225,
        "desc": "Passive: Consumes a charge to block 120 magic damage from damage instances over 50 damage. Comes with 5 charges. When the charges are gone, the item disappear.",
        "notes": "Uses at most one charge per damage instance.",
        "attrib": "MANA REGEN: <span class=\"attribVal\">0.85</span><br />\nMAGIC DAMAGE BLOCK: <span class=\"attribVal\">120</span><br />\nINITIAL CHARGES: <span class=\"attribVal\">5</span>",
        "mc": false,
        "cd": 4,
        "lore": "",
        "components": null,
        "created": false
    },
    "wind_lace": {
        "id": 244,
        "img": "wind_lace_lg.png?3",
        "dname": "Wind Lace",
        "qual": "component",
        "cost": 225,
        "desc": "Passive: Gives increased movement speed.",
        "notes": "Multiple instances do not stack.",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Movement Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "ring_of_protection": {
        "id": 12,
        "img": "ring_of_protection_lg.png?3",
        "dname": "Ring of Protection",
        "qual": "component",
        "cost": 175,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
        "mc": false,
        "cd": false,
        "lore": "A glimmering ring that defends its bearer.",
        "components": null,
        "created": false
    },
    "stout_shield": {
        "id": 182,
        "img": "stout_shield_lg.png?3",
        "dname": "Stout Shield",
        "qual": "component",
        "cost": 200,
        "desc": "Passive: Damage Block - Gives a chance to block damage based on whether the equipped hero is melee or ranged.",
        "notes": "Multiple sources of damage block don't stack.",
        "attrib": "MELEE DAMAGE BLOCK: <span class=\"attribVal\">16</span><br />\nRANGED DAMAGE BLOCK: <span class=\"attribVal\">8</span><br />\nBLOCK CHANCE: <span class=\"attribVal\">50%</span>",
        "mc": false,
        "cd": false,
        "lore": "One man's wine barrel bottom is another man's shield.",
        "components": null,
        "created": false
    },
    "moon_shard": {
        "id": 247,
        "img": "moon_shard_lg.png?3",
        "dname": "Moon Shard",
        "qual": "common",
        "cost": 4000,
        "desc": "Use: Consume the Moon Shard to permanently gain 60 attack speed. Does not stack.<br />\r\nPassive: Shade Sight - Grants 250 bonus night vision.",
        "notes": "The bonus night vision works during Night Stalker's Darkness ability.",
        "attrib": "+ <span class=\"attribVal\">120</span> <span class=\"attribValText\">Attack Speed</span><br />\nSHADE BONUS NIGHT VISION: <span class=\"attribVal\">250</span><br />\nCONSUME ATTACK SPEED: <span class=\"attribVal\">60</span>",
        "mc": false,
        "cd": false,
        "lore": "Said to be a tear from the lunar goddess Selemene.",
        "components": [
            "hyperstone",
            "hyperstone"
        ],
        "created": true
    },
    "gauntlets": {
        "id": 13,
        "img": "gauntlets_lg.png?3",
        "dname": "Gauntlets of Strength",
        "qual": "component",
        "cost": 150,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Strength</span>",
        "mc": false,
        "cd": false,
        "lore": "Studded leather gloves that add brute strength.",
        "components": null,
        "created": false
    },
    "slippers": {
        "id": 14,
        "img": "slippers_lg.png?3",
        "dname": "Slippers of Agility",
        "qual": "component",
        "cost": 150,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Agility</span>",
        "mc": false,
        "cd": false,
        "lore": "Light boots made from spider skin that tingles your senses.",
        "components": null,
        "created": false
    },
    "mantle": {
        "id": 15,
        "img": "mantle_lg.png?3",
        "dname": "Mantle of Intelligence",
        "qual": "component",
        "cost": 150,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Intelligence</span>",
        "mc": false,
        "cd": false,
        "lore": "A beautiful sapphire mantle worn by generations of queens.",
        "components": null,
        "created": false
    },
    "branches": {
        "id": 16,
        "img": "branches_lg.png?3",
        "dname": "Iron Branch",
        "qual": "component",
        "cost": 50,
        "desc": "Active: Targets the ground to plant a happy little tree that lasts for 20 seconds.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">1</span> <span class=\"attribValText\">All Attributes</span><br />\nTREE DURATION: <span class=\"attribVal\">20</span>",
        "mc": false,
        "cd": 0,
        "lore": "A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.",
        "components": null,
        "created": false
    },
    "belt_of_strength": {
        "id": 17,
        "img": "belt_of_strength_lg.png?3",
        "dname": "Belt of Strength",
        "qual": "component",
        "cost": 450,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span>",
        "mc": false,
        "cd": false,
        "lore": "A valued accessory for improving vitality.",
        "components": null,
        "created": false
    },
    "boots_of_elves": {
        "id": 18,
        "img": "boots_of_elves_lg.png?3",
        "dname": "Band of Elvenskin",
        "qual": "component",
        "cost": 450,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Agility</span>",
        "mc": false,
        "cd": false,
        "lore": "A tensile fabric often used for its light weight and ease of movement.",
        "components": null,
        "created": false
    },
    "robe": {
        "id": 19,
        "img": "robe_lg.png?3",
        "dname": "Robe of the Magi",
        "qual": "component",
        "cost": 450,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Intelligence</span>",
        "mc": false,
        "cd": false,
        "lore": "This robe corrupts the soul of the user, but provides wisdom in return.",
        "components": null,
        "created": false
    },
    "circlet": {
        "id": 20,
        "img": "circlet_lg.png?3",
        "dname": "Circlet",
        "qual": "component",
        "cost": 165,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span>",
        "mc": false,
        "cd": false,
        "lore": "An elegant circlet designed for human princesses.",
        "components": null,
        "created": false
    },
    "ogre_axe": {
        "id": 21,
        "img": "ogre_axe_lg.png?3",
        "dname": "Ogre Club",
        "qual": "component",
        "cost": 1000,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span>",
        "mc": false,
        "cd": false,
        "lore": "You grow stronger just by holding it.",
        "components": null,
        "created": false
    },
    "blade_of_alacrity": {
        "id": 22,
        "img": "blade_of_alacrity_lg.png?3",
        "dname": "Blade of Alacrity",
        "qual": "component",
        "cost": 1000,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Agility</span>",
        "mc": false,
        "cd": false,
        "lore": "A long blade imbued with time magic.",
        "components": null,
        "created": false
    },
    "staff_of_wizardry": {
        "id": 23,
        "img": "staff_of_wizardry_lg.png?3",
        "dname": "Staff of Wizardry",
        "qual": "component",
        "cost": 1000,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span>",
        "mc": false,
        "cd": false,
        "lore": "A staff of magical powers passed down from the eldest mages.",
        "components": null,
        "created": false
    },
    "ultimate_orb": {
        "id": 24,
        "img": "ultimate_orb_lg.png?3",
        "dname": "Ultimate Orb",
        "qual": "secret_shop",
        "cost": 2100,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">All Attributes</span>",
        "mc": false,
        "cd": false,
        "lore": "A mystical orb containing the essence of life.",
        "components": null,
        "created": false
    },
    "gloves": {
        "id": 25,
        "img": "gloves_lg.png?3",
        "dname": "Gloves of Haste",
        "qual": "component",
        "cost": 500,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Attack Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "A pair of magical gloves that seems to render weapons weightless.",
        "components": null,
        "created": false
    },
    "lifesteal": {
        "id": 26,
        "img": "lifesteal_lg.png?3",
        "dname": "Morbid Mask",
        "qual": "component",
        "cost": 900,
        "desc": "Passive: Lifesteal - Heals the attacker for a percentage of attack damage dealt.<br />\r\n<br />\r\nMorbid Mask is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.",
        "notes": "",
        "attrib": "LIFESTEAL: <span class=\"attribVal\">15%</span>",
        "mc": false,
        "cd": false,
        "lore": "A mask that drains the energy of those caught in its gaze.",
        "components": null,
        "created": false
    },
    "ring_of_regen": {
        "id": 27,
        "img": "ring_of_regen_lg.png?3",
        "dname": "Ring of Regen",
        "qual": "component",
        "cost": 325,
        "desc": "",
        "notes": "Ring of Regen is shareable.",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "This ring is considered a good luck charm among the Gnomes.",
        "components": null,
        "created": false
    },
    "sobi_mask": {
        "id": 28,
        "img": "sobi_mask_lg.png?3",
        "dname": "Sage's Mask",
        "qual": "component",
        "cost": 325,
        "desc": "",
        "notes": "Sage's Mask is shareable.",
        "attrib": "+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "A mask commonly used by mages and warlocks for various rituals.",
        "components": null,
        "created": false
    },
    "boots": {
        "id": 29,
        "img": "boots_lg.png?3",
        "dname": "Boots of Speed",
        "qual": "component",
        "cost": 400,
        "desc": "Flat movement speed bonuses from multiple pairs of boots do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "Fleet footwear, increasing movement.",
        "components": null,
        "created": false
    },
    "gem": {
        "id": 30,
        "img": "gem_lg.png?3",
        "dname": "Gem of True Sight",
        "qual": "component",
        "cost": 900,
        "desc": "Passive: True Sight - Adds the ability to see invisible units and wards to any allied vision within its carrier's range.<br />\r\nDropped on death, and cannot be destroyed.",
        "notes": "Disabled while on a courier.",
        "attrib": "TRUE SIGHT RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": false,
        "lore": "Not one thrall creature of the depths,\r\nNor spirit bound in drowning's keep,\r\nNor Maelrawn the Tentacular,\r\nShall rest till seas, gem comes to sleep.",
        "components": null,
        "created": false
    },
    "cloak": {
        "id": 31,
        "img": "cloak_lg.png?3",
        "dname": "Cloak",
        "qual": "component",
        "cost": 550,
        "desc": "",
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": "+ <span class=\"attribVal\">15%</span> <span class=\"attribValText\">Spell Resistance</span>",
        "mc": false,
        "cd": false,
        "lore": "A cloak made of a magical material that works to dispel any magic cast on it.",
        "components": null,
        "created": false
    },
    "talisman_of_evasion": {
        "id": 32,
        "img": "talisman_of_evasion_lg.png?3",
        "dname": "Talisman of Evasion",
        "qual": "secret_shop",
        "cost": 1700,
        "desc": "Stacks diminishingly with other sources of Evasion.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25%</span> <span class=\"attribValText\">Evasion</span>",
        "mc": false,
        "cd": false,
        "lore": "A necklace that allows you to anticipate enemy attacks.",
        "components": null,
        "created": false
    },
    "cheese": {
        "id": 33,
        "img": "cheese_lg.png?3",
        "dname": "Cheese",
        "qual": "epic",
        "cost": 1000,
        "desc": "Use: Consume to instantly restore health and mana.",
        "notes": "Cheese is shareable.",
        "attrib": "HEALTH RESTORED: <span class=\"attribVal\">2500</span><br />\nMANA RESTORED: <span class=\"attribVal\">1000</span>",
        "mc": false,
        "cd": 40,
        "lore": "Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.",
        "components": null,
        "created": false
    },
    "magic_stick": {
        "id": 34,
        "img": "magic_stick_lg.png?3",
        "dname": "Magic Stick",
        "qual": "component",
        "cost": 200,
        "desc": "Active: Energy Charge - Instantly restores health and mana based on the number of charges stored. Gains a charge (max 10) whenever a nearby visible enemy uses an ability.",
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.<br />Certain abilities and item abilities will not add charges.",
        "attrib": "HEALTH/MANA PER CHARGE: <span class=\"attribVal\">15</span>",
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": null,
        "created": false
    },
    "magic_wand": {
        "id": 36,
        "img": "magic_wand_lg.png?3",
        "dname": "Magic Wand",
        "qual": "common",
        "cost": 465,
        "desc": "Active: Energy Charge - Instantly restores health and mana based on the number of charges stored. Gains a charge (max 17) whenever a nearby visible enemy uses an ability.",
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.<br />Certain abilities and item abilities will not add charges.",
        "attrib": "+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">All Attributes</span><br />\nHEALTH/MANA PER CHARGE: <span class=\"attribVal\">15</span>",
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": [
            "circlet",
            "branches",
            "branches",
            "magic_stick"
        ],
        "created": true
    },
    "ghost": {
        "id": 37,
        "img": "ghost_lg.png?3",
        "dname": "Ghost Scepter",
        "qual": "component",
        "cost": 1500,
        "desc": "Active: Ghost Form - Enter ghost form, becoming immune to physical damage, yet unable to attack and taking 40% extra magic damage.<br />\r\nUsing a Town Portal Scroll or Boots of Travel  will not dispel Ghost Form.",
        "notes": "Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.<br />Shares cooldown with Ethereal Blade.",
        "attrib": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">All Attributes</span><br />\nGHOST DURATION: <span class=\"attribVal\">4</span><br />\nGHOST ADDED MAGIC DAMAGE: <span class=\"attribVal\">40%</span>",
        "mc": false,
        "cd": 25,
        "lore": "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
        "components": null,
        "created": false
    },
    "clarity": {
        "id": 38,
        "img": "clarity_lg.png?3",
        "dname": "Clarity",
        "qual": "consumable",
        "cost": 50,
        "desc": "Use: Restores mana to the target unit over time.  If the unit is attacked, the effect is lost.",
        "notes": "",
        "attrib": "TOTAL MANA RESTORED: <span class=\"attribVal\">190</span><br />\nDURATION: <span class=\"attribVal\">50</span>",
        "mc": false,
        "cd": false,
        "lore": "Clear water that enhances the ability to meditate.",
        "components": null,
        "created": false
    },
    "enchanted_mango": {
        "id": 216,
        "img": "enchanted_mango_lg.png?3",
        "dname": "Enchanted Mango",
        "qual": "consumable",
        "cost": 125,
        "desc": "Use: Consume the mango to instantly restore 150 mana.<br />\r\n<br />\r\nHold Control to use Enchanted Mango on an allied hero.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">1</span> <span class=\"attribValText\">HP Regeneration</span><br />\nMANA RESTORED: <span class=\"attribVal\">150</span>",
        "mc": false,
        "cd": false,
        "lore": "The bittersweet flavors of Jidi Isle are irresistible to amphibians.",
        "components": null,
        "created": false
    },
    "flask": {
        "id": 39,
        "img": "flask_lg.png?3",
        "dname": "Healing Salve",
        "qual": "consumable",
        "cost": 110,
        "desc": "Use: Restores health to the target unit over time.  If the unit is attacked, the effect is lost.",
        "notes": "",
        "attrib": "DURATION: <span class=\"attribVal\">8</span><br />\nHEALTH RESTORED: <span class=\"attribVal\">400</span>",
        "mc": false,
        "cd": false,
        "lore": "A magical salve that can quickly mend even the deepest of wounds.",
        "components": null,
        "created": false
    },
    "dust": {
        "id": 40,
        "img": "dust_lg.png?3",
        "dname": "Dust of Appearance",
        "qual": "consumable",
        "cost": 180,
        "desc": "Use: Reveals and slows invisible Heroes in a nearby area.",
        "notes": "Places a buff on enemy units in the area that prevents them from becoming invisible.",
        "attrib": "DURATION: <span class=\"attribVal\">12</span><br />\nRADIUS: <span class=\"attribVal\">1050</span><br />\nSLOW: <span class=\"attribVal\">20%</span>",
        "mc": 5,
        "cd": 30,
        "lore": "",
        "components": null,
        "created": false
    },
    "bottle": {
        "id": 41,
        "img": "bottle_lg.png?3",
        "dname": "Bottle",
        "qual": "consumable",
        "cost": 660,
        "desc": "Use: Regenerate - Consumes a charge to restore Health and Mana over time. Healing stops if attacked.  Bottle can be refilled at your team's fountain.  Runes can be stored in the Bottle for later use, and are activated automatically after 2 minutes.  If Bottle does not have full charges and is placed on a courier, the courier will move 30% slower.<br />\r\n<br />\r\nHold Control to use Regenerate on an allied hero.  Stored runes cannot be shared.",
        "notes": "Bottle is shareable.",
        "attrib": "HEALTH RESTORED: <span class=\"attribVal\">90</span><br />\nMANA RESTORED: <span class=\"attribVal\">60</span><br />\nDURATION: <span class=\"attribVal\">2.5</span>",
        "mc": false,
        "cd": 0,
        "lore": "An old bottle that survived the ages, the contents placed inside become enchanted.",
        "components": null,
        "created": false
    },
    "ward_observer": {
        "id": 42,
        "img": "ward_observer_lg.png?3",
        "dname": "Observer Ward",
        "qual": "consumable",
        "cost": 65,
        "desc": "Use: Plants an Observer Ward, an invisible watcher that gives vision of its surrounding area to your team. Lasts 6 minutes.<br />\r\n<br />\r\nHold Control to give one Observer Ward to an allied hero.",
        "notes": "",
        "attrib": "VISION RANGE: <span class=\"attribVal\">1600</span><br />\nDURATION (MINUTES): <span class=\"attribVal\">6</span>",
        "mc": false,
        "cd": 1,
        "lore": "A form of half-sentient plant, often cultivated by apprentice wizards.",
        "components": null,
        "created": false
    },
    "ward_sentry": {
        "id": 43,
        "img": "ward_sentry_lg.png?3",
        "dname": "Sentry Ward",
        "qual": "consumable",
        "cost": 200,
        "desc": "Use: Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within its range. Lasts 4 minutes.<br />\r\n<br />\r\nHold Control to give one Sentry Ward to an allied hero.",
        "notes": "",
        "attrib": "TRUE SIGHT RANGE: <span class=\"attribVal\">850</span><br />\nDURATION (MINUTES): <span class=\"attribVal\">4</span>",
        "mc": false,
        "cd": 1,
        "lore": "A form of plant originally grown in the garden of a fearful king.",
        "components": null,
        "created": false
    },
    "ward_dispenser": {
        "id": 218,
        "img": "ward_dispenser_lg.png?3",
        "dname": "Observer and Sentry Wards",
        "qual": "common",
        "cost": 265,
        "desc": "Double-Click to switch the currently active ward.<br />\r\n<br />\r\nUse: Plant the currently active ward to keep watch over an area. Observer Wards reveal their surrounding area to your team. Sentry Wards grant True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within its range.",
        "notes": "",
        "attrib": "OBSERVER VISION RANGE: <span class=\"attribVal\">1600</span><br />\nOBSERVER DURATION (MINUTES): <span class=\"attribVal\">6</span><br />\nSENTRY TRUE SIGHT RANGE: <span class=\"attribVal\">850</span><br />\nSENTRY DURATION (MINUTES): <span class=\"attribVal\">4</span>",
        "mc": false,
        "cd": false,
        "lore": "Advancements in stacking efficiency have made wards easier to carry than ever.",
        "components": [
            "ward_sentry",
            "ward_observer"
        ],
        "created": true
    },
    "tango": {
        "id": 44,
        "img": "tango_lg.png?3",
        "dname": "Tango",
        "qual": "consumable",
        "cost": 125,
        "desc": "Use: Eat a Tree or Ward - Consume a target tree or ward to gradually restore health.<br />\r\n<br />\r\nComes with 4 charges.  Can be used on an allied hero to give them one Tango.",
        "notes": "Heals for double duration when used on a Ironwood Tree or Wards.",
        "attrib": "EAT TREE HEALTH RESTORED: <span class=\"attribVal\">115</span><br />\nEAT WARD HEALTH RESTORED: <span class=\"attribVal\">230</span><br />\nEAT WARD CAST RANGE: <span class=\"attribVal\">450</span><br />\nHEAL DURATION: <span class=\"attribVal\">16</span>",
        "mc": false,
        "cd": false,
        "lore": "Forage to survive on the battlefield.",
        "components": null,
        "created": false
    },
    "tango_single": {
        "id": 241,
        "img": "tango_single_lg.png?3",
        "dname": "Tango (Shared)",
        "qual": "consumable",
        "cost": 30,
        "desc": "Use: Eat a Tree or Ward - Consume a target tree or ward to gradually restore health.",
        "notes": "Heals for double duration when used on a Ironwood Tree or Wards.",
        "attrib": "EAT TREE HEALTH RESTORED: <span class=\"attribVal\">115</span><br />\nEAT WARD HEALTH RESTORED: <span class=\"attribVal\">230</span><br />\nEAT WARD CAST RANGE: <span class=\"attribVal\">450</span><br />\nHEAL DURATION: <span class=\"attribVal\">16</span>",
        "mc": false,
        "cd": 60,
        "lore": "Om nom nom.",
        "components": null,
        "created": false
    },
    "courier": {
        "id": 45,
        "img": "courier_lg.png?3",
        "dname": "Animal Courier",
        "qual": "consumable",
        "cost": 100,
        "desc": "Use: Deploy Courier - Deploys a creature to carry items to and from your team's base.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "Losing the courier is punishable by death.",
        "components": null,
        "created": false
    },
    "tpscroll": {
        "id": 46,
        "img": "tpscroll_lg.png?3",
        "dname": "Town Portal Scroll",
        "qual": "consumable",
        "cost": 50,
        "desc": "Use: Teleport - Teleports you to a target friendly building. Double-click to teleport to your team's base fountain.",
        "notes": "If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.",
        "attrib": "",
        "mc": 75,
        "cd": 70,
        "lore": "",
        "components": null,
        "created": false
    },
    "travel_boots": {
        "id": 48,
        "img": "travel_boots_lg.png?3",
        "dname": "Boots of Travel",
        "qual": "common",
        "cost": 2400,
        "desc": "Active: Teleport - Teleports you to an allied non-hero unit or structure. Double-click to teleport to your team's base fountain. Upgradable to allow you to teleport to allied heroes.<br />\r\n<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.",
        "notes": "Shares cooldown with Town Portal Scrolls.",
        "attrib": "+ <span class=\"attribVal\">100</span> <span class=\"attribValText\">Movement Speed</span>",
        "mc": 75,
        "cd": 45,
        "lore": "Winged boots that grant omnipresence.",
        "components": [
            "boots"
        ],
        "created": true
    },
    "travel_boots_2": {
        "id": 220,
        "img": "travel_boots_2_lg.png?3",
        "dname": "Boots of Travel",
        "qual": "common",
        "cost": 4400,
        "desc": "Active: Teleport - Teleports you to any allied structure or unit, including heroes. Double-click to teleport to your team's base fountain.<br />\r\n<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.",
        "notes": "Shares cooldown with Town Portal Scrolls.",
        "attrib": "+ <span class=\"attribVal\">100</span> <span class=\"attribValText\">Movement Speed</span>",
        "mc": 75,
        "cd": 45,
        "lore": "",
        "components": [
            "travel_boots",
            "recipe_travel_boots"
        ],
        "created": true
    },
    "phase_boots": {
        "id": 50,
        "img": "phase_boots_lg.png?3",
        "dname": "Phase Boots",
        "qual": "common",
        "cost": 1240,
        "desc": "Active: Phase - Gives increased movement speed and lets you move through units.  The increased movement speed is based on whether the equipped hero is melee or ranged.<br />\r\n<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span><br />\nPHASE MOVE BOOST MELEE: <span class=\"attribVal\">24%</span><br />\nPHASE MOVE BOOST RANGED: <span class=\"attribVal\">20%</span><br />\nPHASE DURATION: <span class=\"attribVal\">2.5</span>",
        "mc": false,
        "cd": 8,
        "lore": "Boots that allow the wearer to travel between the ether.",
        "components": [
            "boots",
            "blades_of_attack",
            "blades_of_attack"
        ],
        "created": true
    },
    "demon_edge": {
        "id": 51,
        "img": "demon_edge_lg.png?3",
        "dname": "Demon Edge",
        "qual": "secret_shop",
        "cost": 2400,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">46</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.",
        "components": null,
        "created": false
    },
    "eagle": {
        "id": 52,
        "img": "eagle_lg.png?3",
        "dname": "Eaglesong",
        "qual": "secret_shop",
        "cost": 3200,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Agility</span>",
        "mc": false,
        "cd": false,
        "lore": "Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.",
        "components": null,
        "created": false
    },
    "reaver": {
        "id": 53,
        "img": "reaver_lg.png?3",
        "dname": "Reaver",
        "qual": "secret_shop",
        "cost": 3000,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Strength</span>",
        "mc": false,
        "cd": false,
        "lore": "A massive axe capable of tearing whole mountains down.",
        "components": null,
        "created": false
    },
    "relic": {
        "id": 54,
        "img": "relic_lg.png?3",
        "dname": "Sacred Relic",
        "qual": "secret_shop",
        "cost": 3800,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">60</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "An ancient weapon that often turns the tides of war.",
        "components": null,
        "created": false
    },
    "hyperstone": {
        "id": 55,
        "img": "hyperstone_lg.png?3",
        "dname": "Hyperstone",
        "qual": "secret_shop",
        "cost": 2000,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Attack Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "A mystical, carved stone that boosts the fervor of the holder.",
        "components": null,
        "created": false
    },
    "ring_of_health": {
        "id": 56,
        "img": "ring_of_health_lg.png?3",
        "dname": "Ring of Health",
        "qual": "component",
        "cost": 850,
        "desc": "",
        "notes": "Ring of Health is shareable.",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "A shiny ring found beneath a fat halfling's corpse.",
        "components": null,
        "created": false
    },
    "void_stone": {
        "id": 57,
        "img": "void_stone_lg.png?3",
        "dname": "Void Stone",
        "qual": "component",
        "cost": 850,
        "desc": "",
        "notes": "Void Stone is shareable.",
        "attrib": "+ <span class=\"attribVal\">100%</span> <span class=\"attribValText\">Mana Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "Jewelry that was once used to channel nether realm magic, this ring pulses with energy.",
        "components": null,
        "created": false
    },
    "mystic_staff": {
        "id": 58,
        "img": "mystic_staff_lg.png?3",
        "dname": "Mystic Staff",
        "qual": "secret_shop",
        "cost": 2700,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span>",
        "mc": false,
        "cd": false,
        "lore": "Enigmatic staff made of only the most expensive crystals.",
        "components": null,
        "created": false
    },
    "energy_booster": {
        "id": 59,
        "img": "energy_booster_lg.png?3",
        "dname": "Energy Booster",
        "qual": "secret_shop",
        "cost": 900,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span>",
        "mc": false,
        "cd": false,
        "lore": "This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.",
        "components": null,
        "created": false
    },
    "point_booster": {
        "id": 60,
        "img": "point_booster_lg.png?3",
        "dname": "Point Booster",
        "qual": "secret_shop",
        "cost": 1200,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Health</span>",
        "mc": false,
        "cd": false,
        "lore": "A perfectly formed amethyst that nourishes body and mind when held.",
        "components": null,
        "created": false
    },
    "vitality_booster": {
        "id": 61,
        "img": "vitality_booster_lg.png?3",
        "dname": "Vitality Booster",
        "qual": "secret_shop",
        "cost": 1100,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span>",
        "mc": false,
        "cd": false,
        "lore": "A ruby gemstone that has been passed down through generations of warrior kin.",
        "components": null,
        "created": false
    },
    "power_treads": {
        "id": 63,
        "img": "power_treads_lg.png?3",
        "dname": "Power Treads",
        "qual": "common",
        "cost": 1350,
        "desc": "Active: Switch Attribute - Changes selected attribute between Strength, Agility and Intelligence.<br />\r\n<br />\r\nPower Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.  Flat movement speed bonuses from multiple pairs of boots do not stack, nor does the attack speed bonus from multiple Power Treads.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Selected Attribute</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "A pair of tough-skinned boots that change to meet the demands of the wearer.",
        "components": [
            "boots",
            "gloves",
            "belt_of_strength"
        ],
        "created": true
    },
    "hand_of_midas": {
        "id": 65,
        "img": "hand_of_midas_lg.png?3",
        "dname": "Hand of Midas",
        "qual": "common",
        "cost": 2050,
        "desc": "Active: Transmute - Kills a non-hero target for 190 gold and 2.5x experience.  Cannot be used on Ancient Creeps.",
        "notes": "The gold given is reliable gold (you do not get the normal creep bounty).<br />Experience gained by using Transmute is not shared.",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\nTRANSMUTE CAST RANGE: <span class=\"attribVal\">600</span>",
        "mc": false,
        "cd": 100,
        "lore": "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
        "components": [
            "gloves"
        ],
        "created": true
    },
    "oblivion_staff": {
        "id": 67,
        "img": "oblivion_staff_lg.png?3",
        "dname": "Oblivion Staff",
        "qual": "common",
        "cost": 1650,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">75%</span> <span class=\"attribValText\">Mana Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "Deceptively hidden as an ordinary quarterstaff, it is actually very powerful, much like the Eldritch who originally possessed it.",
        "components": [
            "quarterstaff",
            "sobi_mask",
            "robe"
        ],
        "created": true
    },
    "pers": {
        "id": 69,
        "img": "pers_lg.png?3",
        "dname": "Perseverance",
        "qual": "common",
        "cost": 1700,
        "desc": "",
        "notes": "Perseverance is shareable.",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">125%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "A gem that grants heart to the bearer.",
        "components": [
            "ring_of_health",
            "void_stone"
        ],
        "created": true
    },
    "poor_mans_shield": {
        "id": 71,
        "img": "poor_mans_shield_lg.png?3",
        "dname": "Poor Man's Shield",
        "qual": "common",
        "cost": 500,
        "desc": "Passive: Damage Block - Blocks physical attack damage based on whether the equipped hero is ranged or melee.  Poor Man's Shield will always block attacks from enemy Heroes, but has a 53% chance to block damage from creeps.",
        "notes": "Multiple sources of damage block don't stack.",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Agility</span><br />\nMELEE DAMAGE BLOCK: <span class=\"attribVal\">20</span><br />\nRANGED DAMAGE BLOCK: <span class=\"attribVal\">10</span><br />\nCREEP BLOCK CHANCE: <span class=\"attribVal\">53%</span>",
        "mc": false,
        "cd": false,
        "lore": "A busted old shield that seems to block more than it should.",
        "components": [
            "slippers",
            "slippers",
            "stout_shield"
        ],
        "created": true
    },
    "bracer": {
        "id": 73,
        "img": "bracer_lg.png?3",
        "dname": "Bracer",
        "qual": "common",
        "cost": 525,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "The bracer is a common choice to toughen up defenses and increase longevity.",
        "components": [
            "circlet",
            "gauntlets"
        ],
        "created": true
    },
    "banana": {
        "id": 264,
        "img": "banana_lg.png?3",
        "dname": "Banana",
        "qual": "component",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 0,
        "lore": "",
        "components": null,
        "created": false
    },
    "wraith_band": {
        "id": 75,
        "img": "wraith_band_lg.png?3",
        "dname": "Wraith Band",
        "qual": "common",
        "cost": 485,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "A circlet with faint whispers echoing about it.",
        "components": [
            "circlet",
            "slippers"
        ],
        "created": true
    },
    "null_talisman": {
        "id": 77,
        "img": "null_talisman_lg.png?3",
        "dname": "Null Talisman",
        "qual": "common",
        "cost": 470,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "A small gemstone attached to several chains.",
        "components": [
            "circlet",
            "mantle"
        ],
        "created": true
    },
    "mekansm": {
        "id": 79,
        "img": "mekansm_lg.png?3",
        "dname": "Mekansm",
        "qual": "rare",
        "cost": 2275,
        "desc": "Active: Restore - Heals 250 health and gives +2 armor to allied units in a 900 radius.<br />\r\nPassive: Mekansm Aura - Grants 4 health regeneration to allied units in a 900 radius.<br />\r\n<br />\r\nMultiple instances of Mekansm Aura do not stack.",
        "notes": "Restore does not affect units that have been affected by Restore in the last 25 seconds.",
        "attrib": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\nAURA HEALTH REGEN: <span class=\"attribVal\">4</span><br />\nRESTORE HEAL: <span class=\"attribVal\">250</span><br />\nRESTORE ARMOR: <span class=\"attribVal\">2</span><br />\nRESTORE ARMOR DURATION: <span class=\"attribVal\">25</span><br />\nAURA/RESTORE RADIUS: <span class=\"attribVal\">900</span>",
        "mc": 225,
        "cd": 65,
        "lore": "A glowing jewel formed out of assorted parts that somehow fit together perfectly.",
        "components": [
            "headdress",
            "buckler"
        ],
        "created": true
    },
    "vladmir": {
        "id": 81,
        "img": "vladmir_lg.png?3",
        "dname": "Vladmir's Offering",
        "qual": "rare",
        "cost": 2275,
        "desc": "Passive: Vladmir's Aura - Grants lifesteal, health regeneration, mana regeneration, bonus attack damage, and armor to allies in a 900 radius.  The lifesteal percentage is based on whether the hero affected by the aura is melee or ranged.<br />\r\n<br />\r\nMultiple instances of Vladmir's Aura do not stack.",
        "notes": "Does not stack with armor auras from Ring of Basilius, Ring of Aquila, or Vladmir's Offering.",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\nAURA HEALTH REGEN: <span class=\"attribVal\">3</span><br />\nAURA MANA REGEN: <span class=\"attribVal\">0.8</span><br />\nAURA BONUS ARMOR: <span class=\"attribVal\">4</span><br />\nAURA BONUS ATTACK DAMAGE: <span class=\"attribVal\">15%</span><br />\nAURA MELEE LIFESTEAL: <span class=\"attribVal\">15%</span><br />\nAURA RANGED LIFESTEAL: <span class=\"attribVal\">10%</span><br />\nAURA RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": false,
        "lore": "An eerie mask that is haunted with the malice of a fallen vampire.",
        "components": [
            "headdress",
            "ring_of_basilius",
            "lifesteal"
        ],
        "created": true
    },
    "flying_courier": {
        "id": 84,
        "img": "flying_courier_lg.png?3",
        "dname": "Flying Courier",
        "qual": "consumable",
        "cost": 150,
        "desc": "Upgrades your team's Animal Courier to a Flying Courier, granting it swift, unobstructed movement to carry items to and from your team's base.<br />\r\n<br />\r\nRequires a deployed Animal Courier.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "buckler": {
        "id": 86,
        "img": "buckler_lg.png?3",
        "dname": "Buckler",
        "qual": "rare",
        "cost": 800,
        "desc": "Active: Armor Bonus - Gives +2 armor to all allied units in a 900 radius.  Lasts 25 seconds on heroes, 30 seconds on units.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\nARMOR CAST RADIUS: <span class=\"attribVal\">900</span>",
        "mc": 10,
        "cd": 25,
        "lore": "A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.",
        "components": [
            "chainmail",
            "branches"
        ],
        "created": true
    },
    "ring_of_basilius": {
        "id": 88,
        "img": "ring_of_basilius_lg.png?3",
        "dname": "Ring of Basilius",
        "qual": "rare",
        "cost": 500,
        "desc": "Passive: Basilius Aura - Grants mana regeneration and armor in a 900 area of effect.<br />\r\nActive: Toggle whether the aura affects other non-hero units.<br />\r\n<br />\r\nMultiple instances of Basilius Aura do not stack.",
        "notes": "Does not stack with armor auras from Ring of Basilius, Ring of Aquila, or Vladmir's Offering.",
        "attrib": "+ <span class=\"attribVal\">7</span> <span class=\"attribValText\">Damage</span><br />\nAURA MANA REGEN: <span class=\"attribVal\">0.65</span><br />\nAURA BONUS ARMOR: <span class=\"attribVal\">2</span>",
        "mc": false,
        "cd": false,
        "lore": "Ring given as a reward to the greatest mages.",
        "components": [
            "sobi_mask",
            "ring_of_protection"
        ],
        "created": true
    },
    "pipe": {
        "id": 90,
        "img": "pipe_lg.png?3",
        "dname": "Pipe of Insight",
        "qual": "rare",
        "cost": 3100,
        "desc": "Active: Barrier - Gives a shield that blocks 400 spell damage to all allies in a 900 radius.<br />\r\nPassive: Insight Aura - Gives allied units 4 health regeneration and 10% magic resistance in a 900 radius.",
        "notes": "Multiple instances of Barrier do not stack.<br />Stacks multiplicatively with other sources of spell resistance.",
        "attrib": "+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">30%</span> <span class=\"attribValText\">Spell Resistance</span><br />\nAURA HEALTH REGEN: <span class=\"attribVal\">4</span><br />\nAURA MAGIC RESISTANCE: <span class=\"attribVal\">10%</span><br />\nAURA RADIUS: <span class=\"attribVal\">900</span><br />\nBARRIER SPELL BLOCK: <span class=\"attribVal\">400</span><br />\nBARRIER DURATION: <span class=\"attribVal\">12.000000</span><br />\nBARRIER CAST RADIUS: <span class=\"attribVal\">900</span>",
        "mc": 100,
        "cd": 60,
        "lore": "A powerful artifact of mysterious origin, it creates barriers against magical forces.",
        "components": [
            "hood_of_defiance",
            "headdress"
        ],
        "created": true
    },
    "urn_of_shadows": {
        "id": 92,
        "img": "urn_of_shadows_lg.png?3",
        "dname": "Urn of Shadows",
        "qual": "rare",
        "cost": 875,
        "desc": "Active: Soul Release - Heals health over time to friendly units, but deals pure damage over time to enemy units.  The healing effect is lost if the affected ally takes damage from an enemy hero or tower.<br />\r\nGains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.",
        "notes": "Empty urns gain 2 charges.<br />If used on a hero with Soul Release already active on them, it will refresh its duration.",
        "attrib": "+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\nRELEASE ALLY TOTAL HEAL: <span class=\"attribVal\">400</span><br />\nRELEASE ENEMY TOTAL DAMAGE: <span class=\"attribVal\">150</span><br />\nSOUL RELEASE DURATION: <span class=\"attribVal\">8</span><br />\nSOUL RELEASE CAST RANGE: <span class=\"attribVal\">950</span>",
        "mc": false,
        "cd": 7,
        "lore": "Contains the ashes of powerful demons.",
        "components": [
            "sobi_mask",
            "gauntlets",
            "gauntlets"
        ],
        "created": true
    },
    "headdress": {
        "id": 94,
        "img": "headdress_lg.png?3",
        "dname": "Headdress",
        "qual": "rare",
        "cost": 575,
        "desc": "Passive: Regeneration Aura - Restores health to allies in a 900 unit radius.<br />\r\n<br />\r\nMultiple instances of Regeneration Aura do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\nAURA HEALTH REGEN: <span class=\"attribVal\">3</span><br />\nAURA REGEN RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": false,
        "lore": "Creates a soothing aura that restores allies in battle.",
        "components": [
            "ring_of_regen",
            "branches"
        ],
        "created": true
    },
    "sheepstick": {
        "id": 96,
        "img": "sheepstick_lg.png?3",
        "dname": "Scythe of Vyse",
        "qual": "rare",
        "cost": 5650,
        "desc": "Active: Hex - Turns a target unit into a harmless critter for 3.5 seconds. Instantly destroys illusions.",
        "notes": "The target will have a base movement speed of 140, but buffs granting maximum movement speed won't be disabled.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nHEX DURATION: <span class=\"attribVal\">3.5</span>",
        "mc": 100,
        "cd": 25,
        "lore": "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
        "components": [
            "mystic_staff",
            "ultimate_orb",
            "void_stone"
        ],
        "created": true
    },
    "orchid": {
        "id": 98,
        "img": "orchid_lg.png?3",
        "dname": "Orchid Malevolence",
        "qual": "rare",
        "cost": 4075,
        "desc": "Active: Soul Burn - Silences the target unit for 5.0 seconds and amplifies the damage it takes by 30.0%.",
        "notes": "Amplified damage is dealt at the end of the duration as magical damage.",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nSOUL BURN INCREASED DAMAGE: <span class=\"attribVal\">30%</span><br />\nSOUL BURN DURATION: <span class=\"attribVal\">5</span>",
        "mc": 100,
        "cd": 18,
        "lore": "A garnet rod constructed from the essence of a fire demon.",
        "components": [
            "oblivion_staff",
            "oblivion_staff"
        ],
        "created": true
    },
    "bloodthorn": {
        "id": 250,
        "img": "bloodthorn_lg.png?3",
        "dname": "Bloodthorn",
        "qual": "rare",
        "cost": 7195,
        "desc": "Active: Silences a target for 5.0 seconds and amplifies the damage it takes by 30.0%. All attacks on the silenced target will have True Strike and land a crit on impact.<br />\r\nPassive: Critical Strike - Grants each attack a chance to deal additional damage. Critical Strike does not work against buildings.",
        "notes": "Amplified damage is dealt at the end of the duration as magical damage.",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">60</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nCRITICAL CHANCE: <span class=\"attribVal\">20%</span><br />\nCRITICAL DAMAGE: <span class=\"attribVal\">175%</span><br />\nSILENCE INCREASED DAMAGE: <span class=\"attribVal\">30%</span><br />\nSILENCE DURATION: <span class=\"attribVal\">5</span><br />\nSILENCE CRITICAL DAMAGE: <span class=\"attribVal\">135%</span>",
        "mc": 100,
        "cd": 11,
        "lore": "",
        "components": [
            "orchid",
            "lesser_crit"
        ],
        "created": true
    },
    "echo_sabre": {
        "id": 252,
        "img": "echo_sabre_lg.png?3",
        "dname": "Echo Sabre",
        "qual": "rare",
        "cost": 2650,
        "desc": "Passive: Causes melee attacks to attack twice in quick succession. The double attacks apply a 0.6 second 100% movement and attack speed slow on each strike.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">75%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nMOVEMENT SLOW: <span class=\"attribVal\">100%</span><br />\nATTACK SLOW: <span class=\"attribVal\">100</span><br />\nSLOW DURATION: <span class=\"attribVal\">0.6</span>",
        "mc": false,
        "cd": 5,
        "lore": "",
        "components": [
            "ogre_axe",
            "oblivion_staff"
        ],
        "created": true
    },
    "cyclone": {
        "id": 100,
        "img": "cyclone_lg.png?3",
        "dname": "Eul's Scepter of Divinity",
        "qual": "rare",
        "cost": 2725,
        "desc": "Active: Cyclone - Sweeps a target unit up into cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself. Enemy units take 50 magical damage upon landing.",
        "notes": "You cannot cyclone allies.<br />Cyclones cast on yourself go through spell immunity.<br />Cyclone can purge some buffs and debuffs.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Movement Speed</span><br />\nCYCLONE DURATION: <span class=\"attribVal\">2.5</span><br />\nCYCLONE CAST RANGE: <span class=\"attribVal\">575</span>",
        "mc": 175,
        "cd": 23,
        "lore": "A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.",
        "components": [
            "staff_of_wizardry",
            "void_stone",
            "wind_lace"
        ],
        "created": true
    },
    "aether_lens": {
        "id": 232,
        "img": "aether_lens_lg.png?3",
        "dname": "Aether Lens",
        "qual": "rare",
        "cost": 2300,
        "desc": "Passive: Increases spell cast range by 200 and spell damage output by 5%",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">200</span> <span class=\"attribValText\">Cast Range</span><br />\nSPELL DAMAGE AMP: <span class=\"attribVal\">5%</span>",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "energy_booster",
            "ring_of_health"
        ],
        "created": true
    },
    "force_staff": {
        "id": 102,
        "img": "force_staff_lg.png?3",
        "dname": "Force Staff",
        "qual": "rare",
        "cost": 2225,
        "desc": "Active: Force - Pushes any target unit 600 units in the direction it is facing.  Double click to instantly cast Force on yourself.",
        "notes": "Self-cast will cause you to use Force on yourself.<br />Force Staff doesn't interrupt the target's actions.<br />Will not work on a unit inside Chronosphere, Duel, or Black Hole.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": 25,
        "cd": 20,
        "lore": "Allows you to manipulate others, for good or evil.",
        "components": [
            "staff_of_wizardry",
            "ring_of_regen"
        ],
        "created": true
    },
    "hurricane_pike": {
        "id": 263,
        "img": "hurricane_pike_lg.png?3",
        "dname": "Hurricane Pike",
        "qual": "rare",
        "cost": 4375,
        "desc": "Active: When used on an enemy, it pushes you both away from each other 450 units each, and allows you to attack the target without range restrictions for 4 attacks for a maximum of 5.0 seconds. Works like Force Staff when used on self or allies.<br />\r\nPassive: Increases attack range of ranged heroes by 130.",
        "notes": "Self-cast will use Hurricane Pike on yourself.<br />Hurricane Pike doesn't interrupt the target's actions.<br />Will not work on a unit inside Chronosphere, Duel or Black Hole.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">4</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">130</span> <span class=\"attribValText\">Attack Range <font color='#7d7d7d'>(Ranged Only)</font></span><br />\nUNLIMITED RANGE DURATION: <span class=\"attribVal\">5</span><br />\nCAST RANGE ON ENEMY: <span class=\"attribVal\">400</span><br />\nUNLIMITED RANGE ATTACKS: <span class=\"attribVal\">4</span>",
        "mc": 25,
        "cd": 14,
        "lore": "",
        "components": [
            "force_staff",
            "dragon_lance"
        ],
        "created": true
    },
    "dagon": {
        "id": 104,
        "img": "dagon_lg.png?3",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 2720,
        "desc": "Active: Energy Burst - Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">13</span>/16/19/22/25 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\"><span class=\"attribVal\">3</span></span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\"><span class=\"attribVal\">9</span></span> <span class=\"attribValText\">Damage</span><br />\nBURST DAMAGE: <span class=\"attribVal\">400</span>/500/600/700/800<br />\nCAST RANGE: <span class=\"attribVal\">600</span>/650/700/750/800",
        "mc": 180,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "staff_of_wizardry",
            "null_talisman"
        ],
        "created": true
    },
    "dagon_2": {
        "id": 201,
        "img": "dagon_2_lg.png?3",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 3970,
        "desc": "Active: Energy Burst - Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.",
        "notes": "",
        "attrib": "+ 13/<span class=\"attribVal\">16</span>/19/22/25 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span><br />\nBURST DAMAGE: 400/<span class=\"attribVal\">500</span>/600/700/800<br />\nCAST RANGE: 600/<span class=\"attribVal\">650</span>/700/750/800",
        "mc": 180,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon",
            "recipe_dagon"
        ],
        "created": true
    },
    "dagon_3": {
        "id": 202,
        "img": "dagon_3_lg.png?3",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 5220,
        "desc": "Active: Energy Burst - Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.",
        "notes": "",
        "attrib": "+ 13/16/<span class=\"attribVal\">19</span>/22/25 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span><br />\nBURST DAMAGE: 400/500/<span class=\"attribVal\">600</span>/700/800<br />\nCAST RANGE: 600/650/<span class=\"attribVal\">700</span>/750/800",
        "mc": 180,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_2",
            "recipe_dagon"
        ],
        "created": true
    },
    "dagon_4": {
        "id": 203,
        "img": "dagon_4_lg.png?3",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 6470,
        "desc": "Active: Energy Burst - Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.",
        "notes": "",
        "attrib": "+ 13/16/19/<span class=\"attribVal\">22</span>/25 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span><br />\nBURST DAMAGE: 400/500/600/<span class=\"attribVal\">700</span>/800<br />\nCAST RANGE: 600/650/700/<span class=\"attribVal\">750</span>/800",
        "mc": 180,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_3",
            "recipe_dagon"
        ],
        "created": true
    },
    "dagon_5": {
        "id": 204,
        "img": "dagon_5_lg.png?3",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 7720,
        "desc": "Active: Energy Burst - Emits a powerful burst of magical damage upon a targeted enemy unit.",
        "notes": "",
        "attrib": "+ 13/16/19/22/<span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span><br />\nBURST DAMAGE: 400/500/600/700/<span class=\"attribVal\">800</span><br />\nCAST RANGE: 600/650/700/750/<span class=\"attribVal\">800</span>",
        "mc": 180,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_4",
            "recipe_dagon"
        ],
        "created": true
    },
    "necronomicon": {
        "id": 106,
        "img": "necronomicon_lg.png?3",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 2650,
        "desc": "Active: Demonic Summoning - Summons a Warrior and an Archer to fight for you for 40 seconds, whose strength and abilities increase as Necronomicon is upgraded. Warrior gains True Sight at level 3. Upgradable.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">15</span>/21/24 <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">8</span>/12/16 <span class=\"attribValText\">Strength</span><br />\nWARRIOR HEALTH: <span class=\"attribVal\">700</span>/800/900<br />\nWARRIOR DAMAGE: <span class=\"attribVal\">45</span>/60/75<br />\nWARRIOR MANA BREAK: <span class=\"attribVal\">25</span>/50/75<br />\nWARRIOR LAST WILL DMG: <span class=\"attribVal\">550</span>/675/800<br />\nARCHER HEALTH: <span class=\"attribVal\">700</span>/800/900<br />\nARCHER DAMAGE: <span class=\"attribVal\">60</span>/90/120<br />\nARCHER MANA BURN: <span class=\"attribVal\">125</span>/175/225<br />\nARCHER AURA SPEED: <span class=\"attribVal\">5%</span>/7%/9%",
        "mc": 50,
        "cd": 95,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "staff_of_wizardry",
            "belt_of_strength"
        ],
        "created": true
    },
    "necronomicon_2": {
        "id": 193,
        "img": "necronomicon_2_lg.png?3",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 3850,
        "desc": "Active: Demonic Summoning - Summons a Warrior and an Archer to fight for you for 40 seconds, whose strength and abilities increase as Necronomicon is upgraded. Warrior gains True Sight at level 3. Upgradable.",
        "notes": "",
        "attrib": "+ 15/<span class=\"attribVal\">21</span>/24 <span class=\"attribValText\">Intelligence</span><br />\n+ 8/<span class=\"attribVal\">12</span>/16 <span class=\"attribValText\">Strength</span><br />\nWARRIOR HEALTH: 700/<span class=\"attribVal\">800</span>/900<br />\nWARRIOR DAMAGE: 45/<span class=\"attribVal\">60</span>/75<br />\nWARRIOR MANA BREAK: 25/<span class=\"attribVal\">50</span>/75<br />\nWARRIOR LAST WILL DMG: 550/<span class=\"attribVal\">675</span>/800<br />\nARCHER HEALTH: 700/<span class=\"attribVal\">800</span>/900<br />\nARCHER DAMAGE: 60/<span class=\"attribVal\">90</span>/120<br />\nARCHER MANA BURN: 125/<span class=\"attribVal\">175</span>/225<br />\nARCHER AURA SPEED: 5%/<span class=\"attribVal\">7%</span>/9%",
        "mc": 50,
        "cd": 95,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "necronomicon",
            "recipe_necronomicon"
        ],
        "created": true
    },
    "necronomicon_3": {
        "id": 194,
        "img": "necronomicon_3_lg.png?3",
        "dname": "Necronomicon",
        "qual": "rare",
        "cost": 5050,
        "desc": "Active: Demonic Summoning - Summons a Warrior and an Archer to fight for you for 40 seconds, whose strength and abilities increase as Necronomicon is upgraded. Warrior gains True Sight at level 3.",
        "notes": "",
        "attrib": "+ 15/21/<span class=\"attribVal\">24</span> <span class=\"attribValText\">Intelligence</span><br />\n+ 8/12/<span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\nWARRIOR HEALTH: 700/800/<span class=\"attribVal\">900</span><br />\nWARRIOR DAMAGE: 45/60/<span class=\"attribVal\">75</span><br />\nWARRIOR MANA BREAK: 25/50/<span class=\"attribVal\">75</span><br />\nWARRIOR LAST WILL DMG: 550/675/<span class=\"attribVal\">800</span><br />\nARCHER HEALTH: 700/800/<span class=\"attribVal\">900</span><br />\nARCHER DAMAGE: 60/90/<span class=\"attribVal\">120</span><br />\nARCHER MANA BURN: 125/175/<span class=\"attribVal\">225</span><br />\nARCHER AURA SPEED: 5%/7%/<span class=\"attribVal\">9%</span>",
        "mc": 50,
        "cd": 95,
        "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
        "components": [
            "necronomicon_2",
            "recipe_necronomicon"
        ],
        "created": true
    },
    "ultimate_scepter": {
        "id": 108,
        "img": "ultimate_scepter_lg.png?3",
        "dname": "Aghanim's Scepter",
        "qual": "rare",
        "cost": 4200,
        "desc": "Passive: Ultimate Upgrade - Upgrades the ultimate, and some abilities, of certain heroes.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">175</span> <span class=\"attribValText\">Mana</span>",
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": [
            "point_booster",
            "staff_of_wizardry",
            "ogre_axe",
            "blade_of_alacrity"
        ],
        "created": true
    },
    "refresher": {
        "id": 110,
        "img": "refresher_lg.png?3",
        "dname": "Refresher Orb",
        "qual": "rare",
        "cost": 5200,
        "desc": "Active: Reset Cooldowns - Resets the cooldowns of all your items and abilities.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">250%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Damage</span>",
        "mc": 375,
        "cd": 195,
        "lore": "A powerful artifact created for wizards.",
        "components": [
            "pers",
            "pers"
        ],
        "created": true
    },
    "assault": {
        "id": 112,
        "img": "assault_lg.png?3",
        "dname": "Assault Cuirass",
        "qual": "epic",
        "cost": 5250,
        "desc": "Passive: Assault Aura - Grants attack speed and armor to nearby allied units and structures, and decreases the armor of nearby enemies.<br />\r\n<br />\r\nMultiple instances of Assault Aura do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">35</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span><br />\nAURA ATTACK SPEED: <span class=\"attribVal\">20</span><br />\nAURA ALLY BONUS ARMOR: <span class=\"attribVal\">5</span><br />\nAURA ENEMY ARMOR REDUCTION: <span class=\"attribVal\">5</span>",
        "mc": false,
        "cd": false,
        "lore": "Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.",
        "components": [
            "platemail",
            "hyperstone",
            "chainmail"
        ],
        "created": true
    },
    "heart": {
        "id": 114,
        "img": "heart_lg.png?3",
        "dname": "Heart of Tarrasque",
        "qual": "epic",
        "cost": 5500,
        "desc": "Passive: Health Regeneration - Restores a percentage of max health per second. If damage is taken from an enemy hero or Roshan, this ability is disabled for 5 seconds for melee heroes, or 7 seconds for ranged heroes.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">45</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\nHEALTH RESTORED PER SECOND: <span class=\"attribVal\">4.75%</span>",
        "mc": false,
        "cd": 7,
        "lore": "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
        "components": [
            "reaver",
            "vitality_booster"
        ],
        "created": true
    },
    "black_king_bar": {
        "id": 116,
        "img": "black_king_bar_lg.png?3",
        "dname": "Black King Bar",
        "qual": "epic",
        "cost": 3975,
        "desc": "Active: Avatar - Grants Spell Immunity and 100% Magic Damage Resistance.  Duration and cooldown decrease with each use.  Some abilities are able to disable through Avatar.",
        "notes": "Purchasing another Black King Bar will not reset its immunity duration.<br />Using Black King Bar may remove some positive buffs.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span><br />\nAVATAR DURATION: 10/9/8/7/6/5",
        "mc": false,
        "cd": 80,
        "lore": "A powerful staff imbued with the strength of giants.",
        "components": [
            "ogre_axe",
            "mithril_hammer"
        ],
        "created": true
    },
    "aegis": {
        "id": 117,
        "img": "aegis_lg.png?3",
        "dname": "Aegis of the Immortal",
        "qual": "artifact",
        "cost": 0,
        "desc": "Passive: Reincarnation - Brings you to life with full health and mana 5.0 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage).",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "The Immortal was said to own a shield that protected him from death itself.",
        "components": null,
        "created": false
    },
    "shivas_guard": {
        "id": 119,
        "img": "shivas_guard_lg.png?3",
        "dname": "Shiva's Guard",
        "qual": "epic",
        "cost": 4700,
        "desc": "Active: Arctic Blast - Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4.0 seconds.<br />\r\nPassive: Freezing Aura - Reduces the attack speed of all enemies in a 900 radius.<br />\r\n<br />\r\nMultiple instances of Freezing Aura do not stack.",
        "notes": "The wave extends at a speed of 350 to a max size of 900.<br />The Arctic Blast follows its caster.",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Armor</span><br />\nAURA ATTACK SLOW: <span class=\"attribVal\">45</span><br />\nBLAST DAMAGE: <span class=\"attribVal\">200</span><br />\nBLAST MOVEMENT SLOW: <span class=\"attribVal\">40%</span><br />\nBLAST SLOW DURATION: <span class=\"attribVal\">4</span><br />\nBLAST RADIUS: <span class=\"attribVal\">900</span>",
        "mc": 100,
        "cd": 30,
        "lore": "Said to have belonged to a goddess, today it retains much of its former power.",
        "components": [
            "platemail",
            "mystic_staff"
        ],
        "created": true
    },
    "bloodstone": {
        "id": 121,
        "img": "bloodstone_lg.png?3",
        "dname": "Bloodstone",
        "qual": "epic",
        "cost": 4875,
        "desc": "Active: Pocket Deny - Instantly causes you to die.<br />\r\nPassive: Bloodpact - Begins with 12 charges, and gains a charge each time an enemy hero dies within 1675 range. Each charge grants 1 mana regeneration per second, and reduces respawn time by 3 seconds. If the bearer dies, 500 + 30 health per charge is restored to all allies within a 1675 radius, while the Bloodstone loses a third of its charges.",
        "notes": "Only the first Bloodstone will gain charges.",
        "attrib": "+ <span class=\"attribVal\">475</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">200%</span> <span class=\"attribValText\">Mana Regeneration</span>",
        "mc": false,
        "cd": 300,
        "lore": "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
        "components": [
            "soul_ring",
            "soul_booster"
        ],
        "created": true
    },
    "sphere": {
        "id": 123,
        "img": "sphere_lg.png?3",
        "dname": "Linken's Sphere",
        "qual": "epic",
        "cost": 4800,
        "desc": "Passive: Spellblock - Blocks most targeted spells once every 13.0 seconds.<br />\r\nActive: Transfer Spellblock - Temporarily removes Spellblock from the item's owner and transfers it to an allied unit.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": 13,
        "lore": "This magical sphere once protected one of the most famous heroes in history.",
        "components": [
            "ultimate_orb",
            "pers"
        ],
        "created": true
    },
    "lotus_orb": {
        "id": 226,
        "img": "lotus_orb_lg.png?3",
        "dname": "Lotus Orb",
        "qual": "epic",
        "cost": 4000,
        "desc": "Active: Echo Shell - Applies a shield to the target unit which re-casts most targeted spells back to their caster. The shielded unit will still take damage from the spell. Dispels negative buffs when applied.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">125%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\nECHO DURATION: <span class=\"attribVal\">6</span><br />\nECHO CAST RANGE: <span class=\"attribVal\">900</span>",
        "mc": 75,
        "cd": 15,
        "lore": "The jewel at its center still reflects a pale image of its creator.",
        "components": [
            "pers",
            "platemail",
            "energy_booster"
        ],
        "created": true
    },
    "vanguard": {
        "id": 125,
        "img": "vanguard_lg.png?3",
        "dname": "Vanguard",
        "qual": "epic",
        "cost": 2150,
        "desc": "Passive: Damage Block - Makes the wielder block damage from each incoming attack based on whether the equipped hero is melee or ranged.",
        "notes": "Multiple sources of damage block don't stack.",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\nBLOCK DAMAGE MELEE: <span class=\"attribVal\">32</span><br />\nBLOCK DAMAGE RANGED: <span class=\"attribVal\">16</span>",
        "mc": false,
        "cd": false,
        "lore": "A powerful shield that defends its wielder from even the most vicious of attacks.",
        "components": [
            "ring_of_health",
            "vitality_booster",
            "stout_shield"
        ],
        "created": true
    },
    "crimson_guard": {
        "id": 242,
        "img": "crimson_guard_lg.png?3",
        "dname": "Crimson Guard",
        "qual": "epic",
        "cost": 3550,
        "desc": "Active: Guard - Grant nearby allied heroes a 100% chance to block 55 damage from each incoming attack, along with 2 armor. Lasts 10 seconds.<br />\r\nPassive: Damage Block - Makes the wielder block damage from each incoming attack based on whether the equipped hero is melee or ranged.",
        "notes": "Multiple sources of damage block don't stack.<br />Guard does not affect units that have been affected by Guard in the last 50 seconds.",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\nBLOCK DAMAGE MELEE: <span class=\"attribVal\">32</span><br />\nBLOCK DAMAGE RANGED: <span class=\"attribVal\">16</span><br />\nGUARD ARMOR: <span class=\"attribVal\">2</span><br />\nGUARD DURATION: <span class=\"attribVal\">10</span><br />\nGUARD RADIUS: <span class=\"attribVal\">900</span><br />\nGUARD DAMAGE BLOCK : <span class=\"attribVal\">55</span>",
        "mc": false,
        "cd": 50,
        "lore": "A cuirass originally built to protect against the dreaded Year Beast.",
        "components": [
            "vanguard",
            "buckler"
        ],
        "created": true
    },
    "blade_mail": {
        "id": 127,
        "img": "blade_mail_lg.png?3",
        "dname": "Blade Mail",
        "qual": "epic",
        "cost": 2200,
        "desc": "Active: Damage Return - Reflects any damage taken back to the unit that dealt the damage.  Lasts 4.5 seconds.",
        "notes": "Damage Return is calculated before any kind of reduction.<br />Damage Return doesn't reflect damage from other forms of Blademail.<br />Returned damage type is the same as it was received.<br />Can pierce Spell Immunity if the original damage type does.",
        "attrib": "+ <span class=\"attribVal\">22</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\nDAMAGE RETURN DURATION: <span class=\"attribVal\">4.5</span>",
        "mc": 25,
        "cd": 13,
        "lore": "A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.",
        "components": [
            "broadsword",
            "chainmail",
            "robe"
        ],
        "created": true
    },
    "soul_booster": {
        "id": 129,
        "img": "soul_booster_lg.png?3",
        "dname": "Soul Booster",
        "qual": "epic",
        "cost": 3200,
        "desc": "",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span>",
        "mc": false,
        "cd": false,
        "lore": "Regain lost courage.",
        "components": [
            "vitality_booster",
            "energy_booster",
            "point_booster"
        ],
        "created": true
    },
    "hood_of_defiance": {
        "id": 131,
        "img": "hood_of_defiance_lg.png?3",
        "dname": "Hood of Defiance",
        "qual": "epic",
        "cost": 1725,
        "desc": "Active: Creates a spell shield that absorbs up to 325 magical damage.",
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": "+ <span class=\"attribVal\">8</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">30%</span> <span class=\"attribValText\">Spell Resistance</span><br />\nBARRIER BLOCK: <span class=\"attribVal\">325</span><br />\nBARRIER DURATION: <span class=\"attribVal\">12.000000</span>",
        "mc": 75,
        "cd": 60,
        "lore": "A furred, magic resistant headpiece that is feared by wizards.",
        "components": [
            "ring_of_health",
            "cloak",
            "ring_of_regen"
        ],
        "created": true
    },
    "rapier": {
        "id": 133,
        "img": "rapier_lg.png?3",
        "dname": "Divine Rapier",
        "qual": "epic",
        "cost": 6200,
        "desc": "Drops on death.  Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up. A dropped Rapier cannot be picked up by a courier.",
        "notes": "If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.",
        "attrib": "+ <span class=\"attribVal\">330</span> <span class=\"attribValText\">Damage</span>",
        "mc": false,
        "cd": false,
        "lore": "So powerful, it cannot have a single owner.",
        "components": [
            "relic",
            "demon_edge"
        ],
        "created": true
    },
    "monkey_king_bar": {
        "id": 135,
        "img": "monkey_king_bar_lg.png?3",
        "dname": "Monkey King Bar",
        "qual": "epic",
        "cost": 5400,
        "desc": "Passive: Mini-Bash - Grants each attack a chance to deal bonus damage and deal a mini-stun.<br />\r\nPassive: True Strike - Prevents your attacks from missing. True Strike does not work when attacking enemy structures.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">66</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Attack Speed</span><br />\nMINI-BASH CHANCE: <span class=\"attribVal\">35%</span><br />\nMINI-BASH DAMAGE: <span class=\"attribVal\">160</span>",
        "mc": false,
        "cd": false,
        "lore": "A powerful staff used by a master warrior.",
        "components": [
            "demon_edge",
            "javelin",
            "javelin"
        ],
        "created": true
    },
    "radiance": {
        "id": 137,
        "img": "radiance_lg.png?3",
        "dname": "Radiance",
        "qual": "epic",
        "cost": 5150,
        "desc": "Active: Toggle Burn - When active, scorches nearby enemies for 50 damage per second and blinds them, causing them to miss 17% of their attacks.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">65</span> <span class=\"attribValText\">Damage</span><br />\nBURN DAMAGE PER SECOND: <span class=\"attribVal\">50</span><br />\nBURN MISS CHANCE: <span class=\"attribVal\">17%</span><br />\nBURN RADIUS: <span class=\"attribVal\">700</span>",
        "mc": false,
        "cd": false,
        "lore": "A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.",
        "components": [
            "relic"
        ],
        "created": true
    },
    "butterfly": {
        "id": 139,
        "img": "butterfly_lg.png?3",
        "dname": "Butterfly",
        "qual": "epic",
        "cost": 5775,
        "desc": "Active: Flutter - Trade evasion for 35% additional movement speed for 4.0 seconds.<br />\r\n<br />\r\nStacks diminishingly with other sources of Evasion.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">35%</span> <span class=\"attribValText\">Evasion</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\nFLUTTER BONUS MOVE SPEED: <span class=\"attribVal\">35%</span><br />\nFLUTTER DURATION: <span class=\"attribVal\">4</span>",
        "mc": false,
        "cd": 25,
        "lore": "Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.",
        "components": [
            "eagle",
            "talisman_of_evasion",
            "quarterstaff"
        ],
        "created": true
    },
    "greater_crit": {
        "id": 141,
        "img": "greater_crit_lg.png?3",
        "dname": "Daedalus",
        "qual": "epic",
        "cost": 5520,
        "desc": "Passive: Critical Strike - Grants each attack a chance to deal additional damage. Critical Strike does not work against buildings.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">81</span> <span class=\"attribValText\">Damage</span><br />\nCRITICAL CHANCE: <span class=\"attribVal\">30%</span><br />\nCRITICAL DAMAGE: <span class=\"attribVal\">220%</span>",
        "mc": false,
        "cd": false,
        "lore": "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
        "components": [
            "lesser_crit",
            "demon_edge"
        ],
        "created": true
    },
    "basher": {
        "id": 143,
        "img": "basher_lg.png?3",
        "dname": "Skull Basher",
        "qual": "epic",
        "cost": 2700,
        "desc": "Passive: Bash - Grants each attack a chance to stun the target for 1.4 seconds and deal 85 bonus damage, based on whether the equipped hero is ranged or melee.",
        "notes": "Does not stack with other sources of Bash, however it will stack with Mini-Bash (e.g. Monkey King Bar).<br />The following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, Slardar, and Troll Warlord.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\nBASH MELEE CHANCE: <span class=\"attribVal\">25%</span><br />\nBASH RANGED CHANCE: <span class=\"attribVal\">10%</span><br />\nBASH STUN DURATION: <span class=\"attribVal\">1.4</span><br />\nBASH BONUS DAMAGE: <span class=\"attribVal\">85</span>",
        "mc": false,
        "cd": 2,
        "lore": "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
        "components": [
            "belt_of_strength",
            "javelin"
        ],
        "created": true
    },
    "bfury": {
        "id": 145,
        "img": "bfury_lg.png?3",
        "dname": "Battle Fury",
        "qual": "epic",
        "cost": 4500,
        "desc": "Active: Chop Tree/Ward - Destroy a target tree or ward. Chop cast range is increased when targetting wards.<br />\r\nPassive: Quell - Increases attack damage against non-hero units, based on whether the equipped hero is ranged or melee. Does not provide bonus damage against Roshan.<br />\r\nPassive: Cleave - Deals a percent of attack damage in a 280 area around the target. Ranged units cannot Cleave.",
        "notes": "Cleave damage is reduced by armor type but not by armor value.<br />Cleave damage goes through spell immunity.<br />If multiple sources of Cleave are present, each Cleave's damage is applied separately.<br />Chop can be used to destroy Techies' Land Mines and Remote Mines.",
        "attrib": "+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">150%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nCLEAVE DAMAGE: <span class=\"attribVal\">35%</span><br />\nQUELL MELEE DAMAGE: <span class=\"attribVal\">160%</span><br />\nQUELL RANGED DAMAGE: <span class=\"attribVal\">125%</span><br />\nCHOP TREE CAST RANGE: <span class=\"attribVal\">350</span><br />\nCHOP WARD CAST RANGE: <span class=\"attribVal\">450</span>",
        "mc": false,
        "cd": 4,
        "lore": "The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.",
        "components": [
            "broadsword",
            "claymore",
            "pers",
            "quelling_blade"
        ],
        "created": true
    },
    "manta": {
        "id": 147,
        "img": "manta_lg.png?3",
        "dname": "Manta Style",
        "qual": "epic",
        "cost": 4950,
        "desc": "Active: Mirror Image - Creates 2 images of your hero that last 20 seconds. Melee heroes have a 30 second cooldown on this ability, while for Ranged heroes the cooldown is 45 seconds.<br />\r\n<br />\r\nMelee images deal 33% damage and take 350% damage, while Ranged images deal 28% and take 400% damage.<br />\r\n<br />\r\nYasha-based movement speed bonuses from multiple items do not stack.",
        "notes": "Has a 0.1 second cast time during which you are invulnerable.<br />Many effects are removed upon using Manta.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">26</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">10%</span> <span class=\"attribValText\">Movement Speed</span><br />\nNUMBER OF IMAGES: <span class=\"attribVal\">2</span><br />\nIMAGE DURATION: <span class=\"attribVal\">20</span><br />\nMELEE IMAGE DAMAGE: <span class=\"attribVal\">33%</span><br />\nMELEE IMAGE DAMAGE TAKEN: <span class=\"attribVal\">350%</span><br />\nRANGED IMAGE DAMAGE: <span class=\"attribVal\">28%</span><br />\nRANGED IMAGE DAMAGE TAKEN: <span class=\"attribVal\">400%</span>",
        "mc": 125,
        "cd": 45,
        "lore": "An axe made of reflective materials that causes confusion amongst enemy ranks.",
        "components": [
            "yasha",
            "ultimate_orb"
        ],
        "created": true
    },
    "lesser_crit": {
        "id": 149,
        "img": "lesser_crit_lg.png?3",
        "dname": "Crystalys",
        "qual": "epic",
        "cost": 2120,
        "desc": "Passive: Critical Strike - Grants each attack a chance to deal additional damage. Critical Strike does not work against buildings.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\nCRITICAL CHANCE: <span class=\"attribVal\">20%</span><br />\nCRITICAL DAMAGE: <span class=\"attribVal\">175%</span>",
        "mc": false,
        "cd": false,
        "lore": "A blade forged from rare crystals, it seeks weak points in enemy armor.",
        "components": [
            "broadsword",
            "blades_of_attack"
        ],
        "created": true
    },
    "dragon_lance": {
        "id": 236,
        "img": "dragon_lance_lg.png?3",
        "dname": "Dragon Lance",
        "qual": "epic",
        "cost": 1900,
        "desc": "Passive: Increases attack range of ranged heroes by 130.",
        "notes": "Multiple instances do not stack.",
        "attrib": "+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">130</span> <span class=\"attribValText\">Attack Range <font color='#7d7d7d'>(Ranged Only)</font></span>",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "ogre_axe",
            "boots_of_elves",
            "boots_of_elves"
        ],
        "created": true
    },
    "armlet": {
        "id": 151,
        "img": "armlet_lg.png?3",
        "dname": "Armlet of Mordiggian",
        "qual": "epic",
        "cost": 2320,
        "desc": "Active: Toggle Unholy Strength - When active, Unholy Strength grants +31 damage and +25 strength, but drains 40 health per second.  You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated.",
        "notes": "The strength change will affect both maximum and current HP, but you cannot die from the change.<br />The strength change occurs over 0.6 seconds.<br />Activating or deactiving Unholy Strength does not interrupt channeling.",
        "attrib": "+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">7</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": false,
        "cd": 0,
        "lore": "Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.",
        "components": [
            "helm_of_iron_will",
            "gloves",
            "blades_of_attack"
        ],
        "created": true
    },
    "invis_sword": {
        "id": 152,
        "img": "invis_sword_lg.png?3",
        "dname": "Shadow Blade",
        "qual": "epic",
        "cost": 2700,
        "desc": "Active: Shadow Walk - Makes you invisible until the duration ends, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  If attacking to end the invisibility, you gain 175 bonus damage on that attack.  Lasts 14.0 seconds.",
        "notes": "Has a 0.3 second fade time.<br />If the invisibility ends without attacking, the bonus damage is lost.",
        "attrib": "+ <span class=\"attribVal\">22</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\nSHADOW WALK DURATION: <span class=\"attribVal\">14</span><br />\nSHADOW WALK DAMAGE: <span class=\"attribVal\">175</span>",
        "mc": 75,
        "cd": 28,
        "lore": "The blade of a fallen king, it allows you to move unseen and strike from the shadows.",
        "components": [
            "shadow_amulet",
            "claymore"
        ],
        "created": true
    },
    "silver_edge": {
        "id": 249,
        "img": "silver_edge_lg.png?3",
        "dname": "Silver Edge",
        "qual": "epic",
        "cost": 4800,
        "desc": "Active: Shadow Walk - Makes you invisible until the duration ends, or until you attack or cast a spell.  While invisible, you move 20% faster and can move through units.  Attacking to end the invisibility will deal 225 bonus damage to the target, disable their passive abilities, and reduce their damage output.",
        "notes": "Backstab cannot miss.<br />Backstab does not pierce spell immunity.",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">All Attributes</span><br />\nSHADOW WALK DURATION: <span class=\"attribVal\">14</span><br />\nBONUS ATTACK DAMAGE: <span class=\"attribVal\">225</span><br />\nENEMY DAMAGE REDUCTION: <span class=\"attribVal\">50%</span><br />\nREDUCTION DURATION: <span class=\"attribVal\">5</span>",
        "mc": 75,
        "cd": 24,
        "lore": "Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.",
        "components": [
            "invis_sword",
            "ultimate_orb"
        ],
        "created": true
    },
    "sange_and_yasha": {
        "id": 154,
        "img": "sange_and_yasha_lg.png?3",
        "dname": "Sange and Yasha",
        "qual": "artifact",
        "cost": 4100,
        "desc": "Passive: Greater Maim - Each attack has a chance to slow the enemy's movement and attack speed for 5.0 seconds.<br />\r\n<br />\r\nYasha-based movement speed bonuses from multiple items do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">16%</span> <span class=\"attribValText\">Movement Speed</span><br />\nMAIM CHANCE: <span class=\"attribVal\">30%</span><br />\nMOVEMENT SLOW MELEE: <span class=\"attribVal\">26%</span><br />\nATTACK SLOW MELEE: <span class=\"attribVal\">26</span><br />\nMOVEMENT SLOW RANGED: <span class=\"attribVal\">13%</span><br />\nATTACK SLOW RANGED: <span class=\"attribVal\">13</span><br />\nMAIM DURATION: <span class=\"attribVal\">5</span>",
        "mc": false,
        "cd": false,
        "lore": "Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.",
        "components": [
            "yasha",
            "sange"
        ],
        "created": true
    },
    "satanic": {
        "id": 156,
        "img": "satanic_lg.png?3",
        "dname": "Satanic",
        "qual": "artifact",
        "cost": 5900,
        "desc": "Active: Unholy Rage - Increases Lifesteal percentage to 200% for 4.5 seconds.<br />\r\nPassive: Lifesteal - Heals the attacker for a percentage of attack damage dealt.<br />\r\n<br />\r\nSatanic is a Unique Attack Modifier, and does not stack with other Unique Attack Modifier.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\nLIFESTEAL: <span class=\"attribVal\">25%</span><br />\nUNHOLY RAGE LIFESTEAL: <span class=\"attribVal\">200%</span><br />\nUNHOLY RAGE DURATION: <span class=\"attribVal\">4.5</span>",
        "mc": false,
        "cd": 35,
        "lore": "Immense power at the cost of your soul.",
        "components": [
            "reaver",
            "helm_of_the_dominator"
        ],
        "created": true
    },
    "mjollnir": {
        "id": 158,
        "img": "mjollnir_lg.png?3",
        "dname": "Mjollnir",
        "qual": "artifact",
        "cost": 5700,
        "desc": "Active: Static Charge - Places a charged shield on a target unit which has a 20% chance to release a shocking bolt at a nearby attacker and 4 additional enemies.<br />\r\nPassive: Chain Lightning - Grants a chance on attack to release a bolt of electricity that leaps between 12 targets, dealing 150 magical damage to each.<br />\r\n<br />\r\nMjollnir is a Unique Attack Modifier that stacks with other Unique Attack Modifiers, but overrides them when Chain Lightning occurs.",
        "notes": "Static Charge cannot trigger more than once per second.<br />Static Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than 900 range away.<br />Static Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
        "attrib": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">80</span> <span class=\"attribValText\">Attack Speed</span><br />\nSTATIC DURATION: <span class=\"attribVal\">15</span><br />\nSTATIC CHANCE: <span class=\"attribVal\">20%</span><br />\nSTATIC DAMAGE: <span class=\"attribVal\">200</span><br />\nSTATIC RELEASE RADIUS: <span class=\"attribVal\">900</span><br />\nCHAIN CHANCE: <span class=\"attribVal\">25%</span><br />\nCHAIN DAMAGE: <span class=\"attribVal\">150</span><br />\nCHAIN TARGETS: <span class=\"attribVal\">12</span><br />\nCHAIN LEAP RADIUS: <span class=\"attribVal\">900</span>",
        "mc": 50,
        "cd": 35,
        "lore": "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
        "components": [
            "maelstrom",
            "hyperstone"
        ],
        "created": true
    },
    "skadi": {
        "id": 160,
        "img": "skadi_lg.png?3",
        "dname": "Eye of Skadi",
        "qual": "artifact",
        "cost": 5675,
        "desc": "Passive: Cold Attack - Each attack slows the movement and attack speed of the target. The duration of the slow is based on whether the equipped hero is melee or ranged.<br />\r\n<br />\r\nEye of Skadi is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.  Eye of Skadi can be combined with Lifesteal Attack Modifiers.",
        "notes": "Lasts 5 seconds with melee Eye of Skadi, 3 seconds with ranged Eye of Skadi.",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">225</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\nCOLD MOVE SLOW: <span class=\"attribVal\">35%</span><br />\nCOLD ATTACK SLOW: <span class=\"attribVal\">45</span><br />\nCOLD MELEE DURATION: <span class=\"attribVal\">5</span><br />\nCOLD RANGED DURATION: <span class=\"attribVal\">2.5</span>",
        "mc": false,
        "cd": false,
        "lore": "Extremely rare artifact, guarded by the azure dragons.",
        "components": [
            "ultimate_orb",
            "ultimate_orb",
            "point_booster",
            "orb_of_venom"
        ],
        "created": true
    },
    "sange": {
        "id": 162,
        "img": "sange_lg.png?3",
        "dname": "Sange",
        "qual": "artifact",
        "cost": 2050,
        "desc": "Passive: Lesser Maim - Each attack has a chance to slow the enemy's movement and attack speed for 4.0 seconds.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Strength</span><br />\nMAIM CHANCE: <span class=\"attribVal\">20%</span><br />\nMOVEMENT SLOW MELEE: <span class=\"attribVal\">20%</span><br />\nATTACK SLOW MELEE: <span class=\"attribVal\">20</span><br />\nMOVEMENT SLOW RANGED: <span class=\"attribVal\">10%</span><br />\nATTACK SLOW RANGED: <span class=\"attribVal\">10</span><br />\nMAIM DURATION: <span class=\"attribVal\">4</span>",
        "mc": false,
        "cd": false,
        "lore": "Sange is an unusually accurate weapon, seeking weak points automatically.",
        "components": [
            "ogre_axe",
            "belt_of_strength"
        ],
        "created": true
    },
    "helm_of_the_dominator": {
        "id": 164,
        "img": "helm_of_the_dominator_lg.png?3",
        "dname": "Helm of the Dominator",
        "qual": "artifact",
        "cost": 1800,
        "desc": "Active: Dominate - Take control of a non-hero, non-ancient target unit and sets its movement speed to 350. If a dominated creep's base health is naturally below the health minimum, its base health will be raised to the health minimum.<br />\r\nPassive: Lifesteal - Heals the attacker for a percentage of attack damage dealt.<br />\r\n<br />\r\nHelm of the Dominator is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.",
        "notes": "Cannot dominate more than one unit at a time.  If a new unit is dominated, the old one will die.<br />Selling or upgrading Helm of the Dominator will cause dominated units to die.",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">HP Regeneration</span><br />\nLIFESTEAL: <span class=\"attribVal\">15%</span><br />\nDOMINATED HEALTH MINIMUM: <span class=\"attribVal\">1400</span><br />\nCREEP MOVEMENT SPEED: <span class=\"attribVal\">350</span>",
        "mc": 75,
        "cd": 60,
        "lore": "The powerful headpiece of a dead necromancer.",
        "components": [
            "lifesteal",
            "helm_of_iron_will"
        ],
        "created": true
    },
    "maelstrom": {
        "id": 166,
        "img": "maelstrom_lg.png?3",
        "dname": "Maelstrom",
        "qual": "artifact",
        "cost": 2800,
        "desc": "Passive: Chain Lightning - Grants a chance on attack to release a bolt of electricity that leaps between 4 targets, dealing 120 magical damage to each.<br />\r\n<br />\r\nMaelstrom is a Unique Attack Modifier that stacks with other Unique Attack Modifiers, but overrides them when Chain Lightning occurs.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">24</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Attack Speed</span><br />\nCHAIN CHANCE: <span class=\"attribVal\">25%</span><br />\nCHAIN DAMAGE: <span class=\"attribVal\">120</span><br />\nCHAIN TARGETS: <span class=\"attribVal\">4</span><br />\nCHAIN LEAP RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": false,
        "lore": "A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.",
        "components": [
            "mithril_hammer",
            "gloves"
        ],
        "created": true
    },
    "desolator": {
        "id": 168,
        "img": "desolator_lg.png?3",
        "dname": "Desolator",
        "qual": "artifact",
        "cost": 3500,
        "desc": "Passive: Corruption - Your attacks reduce target's armor for 15 seconds.<br />\r\n<br />\r\nDesolator is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.",
        "notes": "Armor reduction works on buildings.",
        "attrib": "+ <span class=\"attribVal\">50</span> <span class=\"attribValText\">Damage</span><br />\nARMOR REDUCTION: <span class=\"attribVal\">7</span>",
        "mc": false,
        "cd": false,
        "lore": "A wicked weapon, used in torturing political criminals.",
        "components": [
            "mithril_hammer",
            "mithril_hammer",
            "blight_stone"
        ],
        "created": true
    },
    "yasha": {
        "id": 170,
        "img": "yasha_lg.png?3",
        "dname": "Yasha",
        "qual": "artifact",
        "cost": 2050,
        "desc": "Yasha-based movement speed bonuses from multiple items do not stack.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">16</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">8%</span> <span class=\"attribValText\">Movement Speed</span>",
        "mc": false,
        "cd": false,
        "lore": "Yasha is regarded as the swiftest weapon ever created.",
        "components": [
            "blade_of_alacrity",
            "boots_of_elves"
        ],
        "created": true
    },
    "mask_of_madness": {
        "id": 172,
        "img": "mask_of_madness_lg.png?3",
        "dname": "Mask of Madness",
        "qual": "artifact",
        "cost": 1800,
        "desc": "Active: Berserk - Gives 100 attack speed and 17% movement speed, but causes you to take extra 25% damage.  Lasts 12.0 seconds.<br />\r\nPassive: Lifesteal - Heals the attacker for a percentage of attack damage dealt.<br />\r\n<br />\r\nMask of Madness is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.",
        "notes": "",
        "attrib": "LIFESTEAL: <span class=\"attribVal\">20%</span><br />\nBERSERK ATTACK SPEED: <span class=\"attribVal\">100</span><br />\nBERSERK MOVE SPEED: <span class=\"attribVal\">17%</span><br />\nBERSERK ADDED DAMAGE TAKEN: <span class=\"attribVal\">25%</span><br />\nBERSERK DURATION: <span class=\"attribVal\">12</span>",
        "mc": 25,
        "cd": 25,
        "lore": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
        "components": [
            "lifesteal"
        ],
        "created": true
    },
    "diffusal_blade": {
        "id": 174,
        "img": "diffusal_blade_lg.png?3",
        "dname": "Diffusal Blade",
        "qual": "artifact",
        "cost": 3150,
        "desc": "Active: Purge - If cast on an enemy, removes buffs from the target and slows it for 4.0 seconds. If cast on an ally, Purge removes most debuffs.<br />\r\nPassive: Manabreak - Each attack burns 40 mana from the target, and deals the same amount in physical damage. Burns 20 mana per attack from melee illusions and 10 mana per attack from ranged illusions. Does not stack with other manabreak abilities.<br />\r\n<br />\r\nUpgradable.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25</span>/35 <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span>/15 <span class=\"attribValText\">Intelligence</span><br />\nPURGE SLOW DURATION: <span class=\"attribVal\"><span class=\"attribVal\">4</span></span><br />\nPURGE CAST RANGE: <span class=\"attribVal\"><span class=\"attribVal\">600</span></span>",
        "mc": false,
        "cd": 2,
        "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "components": [
            "blade_of_alacrity",
            "blade_of_alacrity",
            "robe"
        ],
        "created": true
    },
    "diffusal_blade_2": {
        "id": 196,
        "img": "diffusal_blade_2_lg.png?3",
        "dname": "Diffusal Blade",
        "qual": "artifact",
        "cost": 3850,
        "desc": "Active: Purge - If cast on an enemy, removes buffs from the target and slows it for 4.0 seconds. If cast on an ally, Purge removes most debuffs.<br />\r\nPassive: Manabreak - Each attack burns 40 mana from the target, and deals the same amount in physical damage. Burns 20 mana per attack from melee illusions and 10 mana per attack from ranged illusions. Does not stack with other manabreak abilities.",
        "notes": "",
        "attrib": "+ 25/<span class=\"attribVal\">35</span> <span class=\"attribValText\">Agility</span><br />\n+ 10/<span class=\"attribVal\">15</span> <span class=\"attribValText\">Intelligence</span><br />\nPURGE SLOW DURATION: <span class=\"attribVal\">4</span><br />\nPURGE CAST RANGE: <span class=\"attribVal\">600</span>",
        "mc": false,
        "cd": 2,
        "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "components": [
            "diffusal_blade",
            "recipe_diffusal_blade"
        ],
        "created": true
    },
    "ethereal_blade": {
        "id": 176,
        "img": "ethereal_blade_lg.png?3",
        "dname": "Ethereal Blade",
        "qual": "epic",
        "cost": 4700,
        "desc": "Active: Ether Blast - Launches a projectile which converts the target to ethereal form, increasing any incoming magic damage they take, while rendering them immune to physical damage and unable to attack.  Can be cast on self.  If the target is an enemy, it is also slowed, and takes 2.0x your primary attribute + 75 as magical damage.<br />\r\nUsing a Town Portal Scroll or Boots of Travel will not dispel Ethereal Form.",
        "notes": "Shares cooldown with Ghost Scepter.<br />Ethereal units take 40% bonus magic damage.<br />Lasts an extra second on Self or Allied cast.",
        "attrib": "+ <span class=\"attribVal\">40</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Intelligence</span><br />\nBLAST ENEMY MOVE SLOW: <span class=\"attribVal\">80%</span><br />\nBLAST ENEMY DURATION: <span class=\"attribVal\">3</span><br />\nBLAST ALLY/SELF DURATION: <span class=\"attribVal\">4</span><br />\nINCREASED MAGIC DAMAGE: <span class=\"attribVal\">40%</span>",
        "mc": 100,
        "cd": 20,
        "lore": "A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.",
        "components": [
            "eagle",
            "ghost"
        ],
        "created": true
    },
    "soul_ring": {
        "id": 178,
        "img": "soul_ring_lg.png?3",
        "dname": "Soul Ring",
        "qual": "common",
        "cost": 775,
        "desc": "Active: Sacrifice - Consume 150 health to temporarily gain 150 mana.  Lasts 10 seconds.",
        "notes": "If the mana gain cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.  If this mana is not used before the duration ends, the extra mana is lost.",
        "attrib": "+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nSACRIFICE DURATION: <span class=\"attribVal\">10</span>",
        "mc": false,
        "cd": 30,
        "lore": "A ring that feeds on the souls of those who wear it.",
        "components": [
            "ring_of_regen",
            "sobi_mask"
        ],
        "created": true
    },
    "arcane_boots": {
        "id": 180,
        "img": "arcane_boots_lg.png?3",
        "dname": "Arcane Boots",
        "qual": "rare",
        "cost": 1300,
        "desc": "Active: Replenish Mana - Restores mana to all allies in a 900 area around the hero.<br />\r\n<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.",
        "notes": "Does not work on Meepo clones.",
        "attrib": "+ <span class=\"attribVal\">50</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\nREPLENISH MANA RESTORE: <span class=\"attribVal\">135</span><br />\nREPLENISH CAST RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": 55,
        "lore": "Magi equipped with these boots are valued in battle.",
        "components": [
            "boots",
            "energy_booster"
        ],
        "created": true
    },
    "octarine_core": {
        "id": 235,
        "img": "octarine_core_lg.png?3",
        "dname": "Octarine Core",
        "qual": "rare",
        "cost": 5900,
        "desc": "Passive: Cooldown Reduction - Reduces the cooldown time of all spells and items by 25%.<br />\r\nPassive: Spell Lifesteal - A percentage of damage caused by spells is returned to the caster as health.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">425</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nCOOLDOWN REDUCTION: <span class=\"attribVal\">25%</span><br />\nHERO SPELL LIFESTEAL: <span class=\"attribVal\">25%</span><br />\nCREEP SPELL LIFESTEAL: <span class=\"attribVal\">5%</span>",
        "mc": false,
        "cd": false,
        "lore": "At the core of spellcraft are spectrums only the very gifted can sense.",
        "components": [
            "mystic_staff",
            "soul_booster"
        ],
        "created": true
    },
    "orb_of_venom": {
        "id": 181,
        "img": "orb_of_venom_lg.png?3",
        "dname": "Orb of Venom",
        "qual": "component",
        "cost": 275,
        "desc": "Passive: Poison Attack - Poisons the target, dealing damage over time and slowing movement based on whether the equipped hero is melee or ranged.",
        "notes": "",
        "attrib": "POISON DAMAGE PER SECOND: <span class=\"attribVal\">3</span><br />\nPOISON MELEE SLOW: <span class=\"attribVal\">12%</span><br />\nPOISON RANGED SLOW: <span class=\"attribVal\">4%</span><br />\nPOISON DURATION: <span class=\"attribVal\">4</span>",
        "mc": false,
        "cd": false,
        "lore": "Envenoms your veapon with the venom of a venomous viper.",
        "components": null,
        "created": false
    },
    "blight_stone": {
        "id": 240,
        "img": "blight_stone_lg.png?3",
        "dname": "Blight Stone",
        "qual": "component",
        "cost": 300,
        "desc": "Passive: Your attacks reduce target's armor for 8.0 seconds.<br />\r\n<br />\r\nBlight Stone is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers.",
        "notes": "",
        "attrib": "ARMOR REDUCTION: <span class=\"attribVal\">2</span><br />\nDURATION: <span class=\"attribVal\">8</span>",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "ancient_janggo": {
        "id": 185,
        "img": "ancient_janggo_lg.png?3",
        "dname": "Drum of Endurance",
        "qual": "rare",
        "cost": 1775,
        "desc": "Active: Endurance - Gives bonus +25 attack speed and +13% movement speed to allies in a 900 radius.<br />\r\nPassive: Swiftness Aura - Gives bonus attack and movement speed to allies in a 900 radius.<br />\r\n<br />\r\nMultiple instances of Swiftness Aura do not stack.",
        "notes": "Re-purchasing the Drum of Endurance recipe will refresh its charges.",
        "attrib": "+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">HP Regeneration</span><br />\nAURA ATTACK SPEED: <span class=\"attribVal\">5</span><br />\nAURA MOVE SPEED: <span class=\"attribVal\">5%</span><br />\nENDURANCE ATTACK SPEED: <span class=\"attribVal\">25</span><br />\nENDURANCE MOVE SPEED: <span class=\"attribVal\">13%</span><br />\nENDURANCE DURATION: <span class=\"attribVal\">6</span><br />\nAURA/ENDURANCE RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": 30,
        "lore": "A relic that enchants the bodies of those around it for swifter movement in times of crisis.",
        "components": [
            "ring_of_regen",
            "bracer",
            "wind_lace"
        ],
        "created": true
    },
    "medallion_of_courage": {
        "id": 187,
        "img": "medallion_of_courage_lg.png?3",
        "dname": "Medallion of Courage",
        "qual": "rare",
        "cost": 1175,
        "desc": "Active: Valor - If cast on an ally, increases their armor while reducing the caster's. If cast on an enemy, reduces the armor of both the enemy and the caster. Cannot target magic immune enemies. Armor reduction is halved against Roshan.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">7</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">50%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\nVALOR ARMOR REDUCTION: <span class=\"attribVal\">7</span><br />\nVALOR DURATION: <span class=\"attribVal\">7</span><br />\nVALOR CAST RANGE: <span class=\"attribVal\">1000</span>",
        "mc": false,
        "cd": 7,
        "lore": "The bearer has no fear of combat.",
        "components": [
            "chainmail",
            "sobi_mask",
            "blight_stone"
        ],
        "created": true
    },
    "solar_crest": {
        "id": 229,
        "img": "solar_crest_lg.png?3",
        "dname": "Solar Crest",
        "qual": "rare",
        "cost": 2875,
        "desc": "Active: Shine - Temporarily removes the armor and evasion from Solar Crest. When cast on an ally it grants them 10 armor and 25% evasion. When cast on an enemy, it removes 10 of their armor and blinds them, causing them to miss 25% of their attacks. Cannot target magic immune enemies. Armor reduction is halved against Roshan.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">75%</span> <span class=\"attribValText\">Mana Regeneration</span><br />\n+ <span class=\"attribVal\">25%</span> <span class=\"attribValText\">Evasion</span><br />\nSHINE ALLY BONUS ARMOR: <span class=\"attribVal\">10</span><br />\nSHINE ALLY EVASION: <span class=\"attribVal\">25%</span><br />\nSHINE ENEMY ARMOR LOSS: <span class=\"attribVal\">10</span><br />\nSHINE ENEMY MISS CHANCE: <span class=\"attribVal\">25%</span><br />\nSHINE DURATION: <span class=\"attribVal\">7</span><br />\nSHINE CAST RANGE: <span class=\"attribVal\">1000</span>",
        "mc": false,
        "cd": 7,
        "lore": "A talisman forged to honor the daytime sky.",
        "components": [
            "medallion_of_courage",
            "talisman_of_evasion"
        ],
        "created": true
    },
    "smoke_of_deceit": {
        "id": 188,
        "img": "smoke_of_deceit_lg.png?3",
        "dname": "Smoke of Deceit",
        "qual": "consumable",
        "cost": 50,
        "desc": "Use: Upon activation, the user and all nearby allied player-controlled units gain invisibility and bonus movement speed for a brief time.  Minimap icons will also be hidden.  Attacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility.",
        "notes": "",
        "attrib": "BONUS SPEED: <span class=\"attribVal\">15%</span><br />\nDURATION: <span class=\"attribVal\">35</span>",
        "mc": false,
        "cd": 0,
        "lore": "",
        "components": null,
        "created": false
    },
    "tome_of_knowledge": {
        "id": 257,
        "img": "tome_of_knowledge_lg.png?3",
        "dname": "Tome of Knowledge",
        "qual": "consumable",
        "cost": 150,
        "desc": "Use: Grants you experience.",
        "notes": "",
        "attrib": "XP BONUS: <span class=\"attribVal\">425</span>",
        "mc": false,
        "cd": 0,
        "lore": "",
        "components": null,
        "created": false
    },
    "veil_of_discord": {
        "id": 190,
        "img": "veil_of_discord_lg.png?3",
        "dname": "Veil of Discord",
        "qual": "rare",
        "cost": 2240,
        "desc": "Active: Magic Weakness - Emits a weakening blast that increases the magic damage enemies take. Lasts 16.0 seconds.",
        "notes": "Can be dispelled.",
        "attrib": "+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">HP Regeneration</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">6</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">Intelligence</span><br />\nINCREASED MAGIC DAMAGE: <span class=\"attribVal\">25%</span><br />\nMAGIC WEAKNESS RADIUS: <span class=\"attribVal\">600</span><br />\nMAGIC WEAKNESS DURATION: <span class=\"attribVal\">16</span>",
        "mc": 50,
        "cd": 20,
        "lore": "The headwear of corrupt magi.",
        "components": [
            "helm_of_iron_will",
            "null_talisman",
            "null_talisman"
        ],
        "created": true
    },
    "guardian_greaves": {
        "id": 231,
        "img": "guardian_greaves_lg.png?3",
        "dname": "Guardian Greaves",
        "qual": "rare",
        "cost": 5275,
        "desc": "Active: Mend - Restores 250 health and 160 mana to nearby allies, and removes most negative buffs from the caster.<br />\r\nPassive: Guardian Aura - Provides nearby allies with 4 health regeneration and 2 bonus armor. If an allied hero's health falls below 20%, they receive 15 health regeneration and 15 armor.",
        "notes": "The aura boost only applies to heroes.",
        "attrib": "+ <span class=\"attribVal\">55</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Mana</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">All Attributes</span><br />\n+ <span class=\"attribVal\">5</span> <span class=\"attribValText\">Armor</span><br />\nAURA HEALTH REGEN: <span class=\"attribVal\">4</span><br />\nAURA ARMOR: <span class=\"attribVal\">2</span><br />\nAURA BOOST HEALTH REGEN: <span class=\"attribVal\">15</span><br />\nAURA BOOST ARMOR: <span class=\"attribVal\">15</span><br />\nAURA BOOST THRESHOLD: <span class=\"attribVal\">20%</span><br />\nMEND HEAL: <span class=\"attribVal\">250</span><br />\nMEND MANA RESTORE: <span class=\"attribVal\">160</span><br />\nAURA/MEND RADIUS: <span class=\"attribVal\">900</span>",
        "mc": false,
        "cd": 40,
        "lore": "One of many holy instruments constructed to honor the Omniscience.",
        "components": [
            "mekansm",
            "arcane_boots"
        ],
        "created": true
    },
    "rod_of_atos": {
        "id": 206,
        "img": "rod_of_atos_lg.png?3",
        "dname": "Rod of Atos",
        "qual": "rare",
        "cost": 3100,
        "desc": "Active: Cripple - Slows the target's movement speed.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">30</span> <span class=\"attribValText\">Intelligence</span><br />\n+ <span class=\"attribVal\">350</span> <span class=\"attribValText\">Health</span><br />\nCRIPPLE MOVE SLOW: <span class=\"attribVal\">60%</span><br />\nCRIPPLE DURATION: <span class=\"attribVal\">4</span>",
        "mc": 50,
        "cd": 12,
        "lore": "Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.",
        "components": [
            "vitality_booster",
            "staff_of_wizardry",
            "staff_of_wizardry"
        ],
        "created": true
    },
    "iron_talon": {
        "id": 239,
        "img": "iron_talon_lg.png?3",
        "dname": "Iron Talon",
        "qual": "common",
        "cost": 500,
        "desc": "Active: Targets a non-player enemy unit to remove 40% of its current HP.<br />\r\nPassive: Quell - Increases attack damage against non-hero units, based on whether the equipped hero is ranged or melee. Does not provide bonus damage against Roshan.",
        "notes": "Has a 4 second cooldown on Trees.<br />Cannot target ancients.",
        "attrib": "QUELL MELEE DAMAGE: <span class=\"attribVal\">140%</span><br />\nQUELL RANGED DAMAGE: <span class=\"attribVal\">115%</span><br />\nCAST RANGE: <span class=\"attribVal\">350</span><br />\nCAST RANGE ON WARDS: <span class=\"attribVal\">450</span><br />\n+ <span class=\"attribVal\">2</span> <span class=\"attribValText\">Armor</span>",
        "mc": false,
        "cd": 14,
        "lore": "",
        "components": [
            "quelling_blade",
            "ring_of_protection"
        ],
        "created": true
    },
    "abyssal_blade": {
        "id": 208,
        "img": "abyssal_blade_lg.png?3",
        "dname": "Abyssal Blade",
        "qual": "epic",
        "cost": 6400,
        "desc": "Active: Overwhelm - Stuns a target enemy unit for 2.0 seconds. Pierces Spell Immunity.<br />\r\nPassive: Bash - Grants each attack a chance to stun the target for 1.4 seconds and deal 85 bonus damage, based on whether the equipped hero is ranged or melee.<br />\r\nPassive: Damage Block - Makes the wielder block damage from each incoming attack based on whether the equipped hero is melee or ranged.",
        "notes": "The stun is melee range.<br />Doesn't stack with other bashes.<br />The following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, Slardar, and Troll Warlord.",
        "attrib": "+ <span class=\"attribVal\">250</span> <span class=\"attribValText\">Health</span><br />\n+ <span class=\"attribVal\">15</span> <span class=\"attribValText\">HP Regeneration</span><br />\nBLOCK DAMAGE MELEE: <span class=\"attribVal\">40</span><br />\nBLOCK DAMAGE RANGED: <span class=\"attribVal\">20</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Strength</span><br />\nBASH MELEE CHANCE: <span class=\"attribVal\">25%</span><br />\nBASH RANGED CHANCE: <span class=\"attribVal\">10%</span><br />\nBASH STUN DURATION: <span class=\"attribVal\">1.4</span><br />\nBASH BONUS DAMAGE: <span class=\"attribVal\">85</span><br />\nOVERWHELM STUN DURATION: <span class=\"attribVal\">2</span>",
        "mc": 75,
        "cd": 35,
        "lore": "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
        "components": [
            "basher",
            "vanguard"
        ],
        "created": true
    },
    "heavens_halberd": {
        "id": 210,
        "img": "heavens_halberd_lg.png?3",
        "dname": "Heaven's Halberd",
        "qual": "artifact",
        "cost": 3750,
        "desc": "Active: Disarm - Prevents a target from attacking. Lasts 3.0 seconds on melee targets, and 5.5 seconds on ranged targets.<br />\r\nPassive: Lesser Maim - Each attack has a chance to slow the enemy's movement and attack speed for 4.0 seconds.<br />\r\n<br />\r\nStacks diminishingly with other sources of Evasion.",
        "notes": "Disarm can only be removed with spell immunity.",
        "attrib": "+ <span class=\"attribVal\">25%</span> <span class=\"attribValText\">Evasion</span><br />\n+ <span class=\"attribVal\">25</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Strength</span><br />\nMAIM CHANCE: <span class=\"attribVal\">20%</span><br />\nMOVEMENT SLOW MELEE: <span class=\"attribVal\">20%</span><br />\nATTACK SLOW MELEE: <span class=\"attribVal\">20</span><br />\nMOVEMENT SLOW RANGED: <span class=\"attribVal\">10%</span><br />\nATTACK SLOW RANGED: <span class=\"attribVal\">10</span><br />\nMAIM DURATION: <span class=\"attribVal\">4</span><br />\nDISARM RANGED DURATION: <span class=\"attribVal\">5.5</span><br />\nDISARM MELEE DURATION: <span class=\"attribVal\">3</span><br />\nDISARM CAST RANGE: <span class=\"attribVal\">600</span>",
        "mc": 100,
        "cd": 30,
        "lore": "This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.",
        "components": [
            "sange",
            "talisman_of_evasion"
        ],
        "created": true
    },
    "ring_of_aquila": {
        "id": 212,
        "img": "ring_of_aquila_lg.png?3",
        "dname": "Ring of Aquila",
        "qual": "rare",
        "cost": 985,
        "desc": "Passive: Aquila Aura - Grants mana regeneration and armor in a 900 area of effect.<br />\r\nActive: Toggle whether the aura affects other non-hero units.<br />\r\n<br />\r\nMultiple instances of Aquila Aura do not stack.",
        "notes": "Does not stack with armor auras from Ring of Basilius, Ring of Aquila, or Vladmir's Offering.",
        "attrib": "+ <span class=\"attribVal\">10</span> <span class=\"attribValText\">Damage</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Strength</span><br />\n+ <span class=\"attribVal\">9</span> <span class=\"attribValText\">Agility</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Intelligence</span><br />\nAURA MANA REGEN: <span class=\"attribVal\">0.65</span><br />\nAURA BONUS ARMOR: <span class=\"attribVal\">2</span>",
        "mc": false,
        "cd": false,
        "lore": "The ring of the fallen Warlord Aquila continues to support armies in battle.",
        "components": [
            "wraith_band",
            "ring_of_basilius"
        ],
        "created": true
    },
    "tranquil_boots": {
        "id": 214,
        "img": "tranquil_boots_lg.png?3",
        "dname": "Tranquil Boots",
        "qual": "rare",
        "cost": 900,
        "desc": "Passive: Break - Whenever you attack or are attacked, the health regeneration and 30 Movement Speed are lost for 13 seconds.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">85</span> <span class=\"attribValText\">Movement Speed</span><br />\n+ <span class=\"attribVal\">3</span> <span class=\"attribValText\">Armor</span><br />\n+ <span class=\"attribVal\">12</span> <span class=\"attribValText\">HP Regeneration</span>",
        "mc": false,
        "cd": 13,
        "lore": "While they increase the longevity of the wearer, this boot is not particularly reliable.",
        "components": [
            "boots",
            "ring_of_protection",
            "ring_of_regen"
        ],
        "created": true
    },
    "shadow_amulet": {
        "id": 215,
        "img": "shadow_amulet_lg.png?3",
        "dname": "Shadow Amulet",
        "qual": false,
        "cost": 1300,
        "desc": "Active: Fade - Grants invisibility to you or a target allied hero after a 1.5 second fade time. Moving breaks the invisibility. There is no cooldown when using this item on yourself.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Attack Speed</span><br />\nFADE TIME: <span class=\"attribVal\">1.5</span>",
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false
    },
    "glimmer_cape": {
        "id": 254,
        "img": "glimmer_cape_lg.png?3",
        "dname": "Glimmer Cape",
        "qual": "rare",
        "cost": 1850,
        "desc": "Active: Glimmer - After a 0.6 second delay, grants invisibility and 45% magic resistance to you or a target allied unit. Can be cast while channelling.",
        "notes": "",
        "attrib": "+ <span class=\"attribVal\">20</span> <span class=\"attribValText\">Attack Speed</span><br />\n+ <span class=\"attribVal\">15%</span> <span class=\"attribValText\">Spell Resistance</span><br />\nGLIMMER FADE TIME: <span class=\"attribVal\">0.6</span><br />\nGLIMMER MAGIC RESISTANCE: <span class=\"attribVal\">45%</span><br />\nGLIMMER DURATION: <span class=\"attribVal\">5</span>",
        "mc": 90,
        "cd": 16,
        "lore": "The stolen cape of a master illusionist.",
        "components": [
            "shadow_amulet",
            "cloak"
        ],
        "created": true
    },
    "halloween_candy_corn": {
        "id": 1000,
        "img": "halloween_candy_corn_lg.png?3",
        "dname": "Greevil Taffy",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use: Deposit the candy in your bucket to give all heroes on the map gold and XP, or use it to satisfy a rampaging Roshan's sweet tooth. Get the highest candy in your bucket to win a prize! Carrying candy makes you less healthy, and decreases your max HP.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 0,
        "lore": "A strange looking candy, made out of Greevil cream and gummy vitamins.",
        "components": null,
        "created": false
    },
    "mystery_hook": {
        "id": 1001,
        "img": "mystery_hook_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_mystery_hook",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": 140,
        "cd": 11,
        "lore": "",
        "components": null,
        "created": false
    },
    "mystery_arrow": {
        "id": 1002,
        "img": "mystery_arrow_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_mystery_arrow",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 2,
        "lore": "",
        "components": null,
        "created": false
    },
    "mystery_missile": {
        "id": 1003,
        "img": "mystery_missile_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_mystery_missile",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 20,
        "lore": "",
        "components": null,
        "created": false
    },
    "mystery_toss": {
        "id": 1004,
        "img": "mystery_toss_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_mystery_toss",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 2,
        "lore": "",
        "components": null,
        "created": false
    },
    "mystery_vacuum": {
        "id": 1005,
        "img": "mystery_vacuum_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_mystery_vacuum",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 2,
        "lore": "",
        "components": null,
        "created": false
    },
    "halloween_rapier": {
        "id": 1006,
        "img": "halloween_rapier_lg.png?3",
        "dname": "DOTA_Tooltip_Ability_item_halloween_rapier",
        "qual": "epic",
        "cost": 6200,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "greevil_whistle": {
        "id": 1007,
        "img": "greevil_whistle_lg.png?3",
        "dname": "Greevil Whistle",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the Greevil Whistle to temporarily transform into your Greevil!",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 120,
        "lore": "",
        "components": null,
        "created": false
    },
    "greevil_whistle_toggle": {
        "id": 1008,
        "img": "greevil_whistle_toggle_lg.png?3",
        "dname": "Greevil Whistle",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the Greevil Whistle to toggle between Greevil and Hero!",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 2,
        "lore": "",
        "components": null,
        "created": false
    },
    "present": {
        "id": 1009,
        "img": "present_lg.png?3",
        "dname": "A Gift!",
        "qual": "consumable",
        "cost": 0,
        "desc": "",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 0,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_stocking": {
        "id": 1010,
        "img": "winter_stocking_lg.png?3",
        "dname": "Xmas Stocking",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use: Open Stocking to receive your gifts!",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 0,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_skates": {
        "id": 1011,
        "img": "winter_skates_lg.png?3",
        "dname": "Speed Skates",
        "qual": "component",
        "cost": 0,
        "desc": "Gives a massive increase of 100 to movespeed. Increases control on the ice. Use short paths for the best result!",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_cake": {
        "id": 1012,
        "img": "winter_cake_lg.png?3",
        "dname": "Fruit-bit Cake",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the cake to heal 400 health and 50 mana over 8 seconds",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_cookie": {
        "id": 1013,
        "img": "winter_cookie_lg.png?3",
        "dname": "Wizard Cookie",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the cookie to heal 350 health and 100 mana over 11 seconds",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_coco": {
        "id": 1014,
        "img": "winter_coco_lg.png?3",
        "dname": "Cocoa with Marshmallows",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the cocoa to heal 300 health and 150 mana over 14 seconds",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_ham": {
        "id": 1015,
        "img": "winter_ham_lg.png?3",
        "dname": "Clove Studded Ham",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the ham to heal 300 health and 75 mana over 2 seconds",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_kringle": {
        "id": 1016,
        "img": "winter_kringle_lg.png?3",
        "dname": "Kringle",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the kringle to heal 250 health and 200 mana over 17 seconds",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_mushroom": {
        "id": 1017,
        "img": "winter_mushroom_lg.png?3",
        "dname": "Snow Mushroom",
        "qual": "consumable",
        "cost": 0,
        "desc": "Refreshes all the Greevil's abilities.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_greevil_treat": {
        "id": 1018,
        "img": "winter_greevil_treat_lg.png?3",
        "dname": "Greevil Treat",
        "qual": "consumable",
        "cost": 0,
        "desc": "Makes your greevil move at max speed for 10 seconds.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "There is nothing faster than a greevil eating his favorite treat!",
        "components": null,
        "created": false
    },
    "winter_greevil_garbage": {
        "id": 1019,
        "img": "winter_greevil_garbage_lg.png?3",
        "dname": "Greevil Chow",
        "qual": "consumable",
        "cost": 0,
        "desc": "Use the chow to heal your greevil 400 health and 150 mana over 5 seconds.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": false,
        "lore": "",
        "components": null,
        "created": false
    },
    "winter_greevil_chewy": {
        "id": 1020,
        "img": "winter_greevil_chewy_lg.png?3",
        "dname": "Greevil Blink Bone",
        "qual": "consumable",
        "cost": 0,
        "desc": "After channeling for 2 seconds the greevil pops to the new location.",
        "notes": "",
        "attrib": "",
        "mc": false,
        "cd": 10,
        "lore": "",
        "components": null,
        "created": false
    }
};

var itemTypeMapping = {
    CONSUMABLE : "consumable",
    SUPPORT    : "rare"
};

module.exports = {
    "heroes"   : heroes,
    "roles"    : ROLES,
    "items"    : items,
    "itemType" : itemTypeMapping
};