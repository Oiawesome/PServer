/**
 * Gen 1 needs a pokedex.js change for the following reasons:
 * Special was a single stat.
 * There was no gender in gen 1.
 * Gotta delete some evolutions and pre-evolutions.
 * Additionally, egg groups, gender ratio, and abilities can be deleted to keep this clean.
 * Obnoxiously, the first ability (0) must be kept to make it easier for users, as otherwise
 * Illegal banlist will check for no ability or "None" ability if users use the teambuilder
 * and do not change the default ability.
 */
exports.BattlePokedex = {
missingno:{num:0,species:"Missingno.",types:["Normal","Normal"],gender:"N",baseStats:{hp:33,atk:136,def:0,spa:6,spd:6,spe:29},abilities:{0:"Download"},heightm:3,weightkg:1590.8,color:"Gray"},
bulbasaur:{num:1,species:"Bulbasaur",types:["Grass","Poison"],gender:"N",baseStats:{hp:45,atk:49,def:49,spa:65,spd:65,spe:45},abilities:{0:"Overgrow"},heightm:0.7,weightkg:6.9,color:"Green",evos:["ivysaur"]},
ivysaur:{num:2,species:"Ivysaur",types:["Grass","Poison"],gender:"N",baseStats:{hp:60,atk:62,def:63,spa:80,spd:80,spe:60},abilities:{0:"Overgrow"},heightm:1,weightkg:13,color:"Green",prevo:"bulbasaur",evos:["venusaur"],evoLevel:16},
venusaur:{num:3,species:"Venusaur",types:["Grass","Poison"],gender:"N",baseStats:{hp:80,atk:82,def:83,spa:100,spd:100,spe:80},abilities:{0:"Overgrow"},heightm:2,weightkg:100,color:"Green",prevo:"ivysaur",evoLevel:32},
charmander:{num:4,species:"Charmander",types:["Fire"],gender:"N",baseStats:{hp:39,atk:52,def:43,spa:50,spd:50,spe:65},abilities:{0:"Blaze"},heightm:0.6,weightkg:8.5,color:"Red",evos:["charmeleon"],eggGroups:["Monster","Dragon"]},
charmeleon:{num:5,species:"Charmeleon",types:["Fire"],gender:"N",baseStats:{hp:58,atk:64,def:58,spa:65,spd:65,spe:80},abilities:{0:"Blaze"},heightm:1.1,weightkg:19,color:"Red",prevo:"charmander",evos:["charizard"],evoLevel:16},
charizard:{num:6,species:"Charizard",types:["Fire","Flying"],gender:"N",baseStats:{hp:78,atk:84,def:78,spa:85,spd:85,spe:100},abilities:{0:"Blaze"},heightm:1.7,weightkg:90.5,color:"Red",prevo:"charmeleon",evoLevel:36},
squirtle:{num:7,species:"Squirtle",types:["Water"],gender:"N",baseStats:{hp:44,atk:48,def:65,spa:50,spd:50,spe:43},abilities:{0:"Torrent"},heightm:0.5,weightkg:9,color:"Blue",evos:["wartortle"]},
wartortle:{num:8,species:"Wartortle",types:["Water"],gender:"N",baseStats:{hp:59,atk:63,def:80,spa:65,spd:65,spe:58},abilities:{0:"Torrent"},heightm:1,weightkg:22.5,color:"Blue",prevo:"squirtle",evos:["blastoise"],evoLevel:16},
blastoise:{num:9,species:"Blastoise",types:["Water"],gender:"N",baseStats:{hp:79,atk:83,def:100,spa:85,spd:85,spe:78},abilities:{0:"Torrent"}, heightm:1.6,weightkg:85.5,color:"Blue",prevo:"wartortle",evoLevel:36},
caterpie:{num:10,species:"Caterpie",types:["Bug"],gender:"N",baseStats:{hp:45,atk:30,def:35,spa:20,spd:20,spe:45},abilities:{0:"Shield Dust"},heightm:0.3,weightkg:2.9,color:"Green",evos:["metapod"]},
metapod:{num:11,species:"Metapod",types:["Bug"],gender:"N",baseStats:{hp:50,atk:20,def:55,spa:25,spd:25,spe:30},abilities:{0:"Shed Skin"},heightm:0.7,weightkg:9.9,color:"Green",prevo:"caterpie",evos:["butterfree"],evoLevel:7},
butterfree:{num:12,species:"Butterfree",types:["Bug","Flying"],gender:"N",baseStats:{hp:60,atk:45,def:50,spa:80,spd:80,spe:70},abilities:{0:"Compoundeyes"},heightm:1.1,weightkg:32,color:"White",prevo:"metapod",evoLevel:10},
weedle:{num:13,species:"Weedle",types:["Bug","Poison"],gender:"N",baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50},abilities:{0:"Shield Dust"},heightm:0.3,weightkg:3.2,color:"Brown",evos:["kakuna"]},
kakuna:{num:14,species:"Kakuna",types:["Bug","Poison"],gender:"N",baseStats:{hp:45,atk:25,def:50,spa:25,spd:25,spe:35},abilities:{0:"Shed Skin"},heightm:0.6,weightkg:10,color:"Yellow",prevo:"weedle",evos:["beedrill"],evoLevel:7},
beedrill:{num:15,species:"Beedrill",types:["Bug","Poison"],gender:"N",baseStats:{hp:65,atk:80,def:40,spa:45,spd:45,spe:75},abilities:{0:"Swarm"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"kakuna",evoLevel:10},
pidgey:{num:16,species:"Pidgey",types:["Normal","Flying"],gender:"N",baseStats:{hp:40,atk:45,def:40,spa:35,spd:35,spe:56},abilities:{0:"Keen Eye"},heightm:0.3,weightkg:1.8,color:"Brown",evos:["pidgeotto"]},
pidgeotto:{num:17,species:"Pidgeotto",types:["Normal","Flying"],gender:"N",baseStats:{hp:63,atk:60,def:55,spa:50,spd:50,spe:71},abilities:{0:"Keen Eye"},heightm:1.1,weightkg:30,color:"Brown",prevo:"pidgey",evos:["pidgeot"],evoLevel:18},
pidgeot:{num:18,species:"Pidgeot",types:["Normal","Flying"],gender:"N",baseStats:{hp:83,atk:80,def:75,spa:70,spd:70,spe:91},abilities:{0:"Keen Eye"},heightm:1.5,weightkg:39.5,color:"Brown",prevo:"pidgeotto",evoLevel:36},
rattata:{num:19,species:"Rattata",types:["Normal"],gender:"N",baseStats:{hp:30,atk:56,def:35,spa:25,spd:25,spe:72},abilities:{0:"Run Away"},heightm:0.3,weightkg:3.5,color:"Purple",evos:["raticate"]},
raticate:{num:20,species:"Raticate",types:["Normal"],gender:"N",baseStats:{hp:55,atk:81,def:60,spa:50,spd:50,spe:97},abilities:{0:"Run Away"},heightm:0.7,weightkg:18.5,color:"Brown",prevo:"rattata",evoLevel:20},
spearow:{num:21,species:"Spearow",types:["Normal","Flying"],gender:"N",baseStats:{hp:40,atk:60,def:30,spa:31,spd:31,spe:70},abilities:{0:"Keen Eye"}, heightm:0.3,weightkg:2,color:"Brown",evos:["fearow"]},
fearow:{num:22,species:"Fearow",types:["Normal","Flying"],gender:"N",baseStats:{hp:65,atk:90,def:65,spa:61,spd:61,spe:100},abilities:{0:"Keen Eye"}, heightm:1.2,weightkg:38,color:"Brown",prevo:"spearow",evoLevel:20},
ekans:{num:23,species:"Ekans",types:["Poison"],gender:"N",baseStats:{hp:35,atk:60,def:44,spa:40,spd:40,spe:55},abilities:{0:"Intimidate"},heightm:2,weightkg:6.9,color:"Purple",evos:["arbok"]},
arbok:{num:24,species:"Arbok",types:["Poison"],gender:"N",baseStats:{hp:60,atk:85,def:69,spa:65,spd:65,spe:80},abilities:{0:"Intimidate"},heightm:3.5,weightkg:65,color:"Purple",prevo:"ekans",evoLevel:22},
pikachu:{num:25,species:"Pikachu",types:["Electric"],gender:"N",baseStats:{hp:35,atk:55,def:30,spa:50,spd:50,spe:90},abilities:{0:"Static"},heightm:0.4,weightkg:6,color:"Yellow", evos:["raichu"],evoLevel:1},
raichu:{num:26,species:"Raichu",types:["Electric"],gender:"N",baseStats:{hp:60,atk:90,def:55,spa:90,spd:90,spe:100},abilities:{0:"Static"},heightm:0.8,weightkg:30,color:"Yellow",prevo:"pikachu",evoLevel:1},
sandshrew:{num:27,species:"Sandshrew",types:["Ground"],gender:"N",baseStats:{hp:50,atk:75,def:85,spa:30,spd:30,spe:40},abilities:{0:"Sand Veil",DW:"Sand Rush"},heightm:0.6,weightkg:12,color:"Yellow",evos:["sandslash"]},
sandslash:{num:28,species:"Sandslash",types:["Ground"],gender:"N",baseStats:{hp:75,atk:100,def:110,spa:55,spd:55,spe:65},abilities:{0:"Sand Veil",DW:"Sand Rush"},heightm:1,weightkg:29.5,color:"Yellow",prevo:"sandshrew",evoLevel:22},
nidoranf:{num:29,species:"NidoranF",types:["Poison"],gender:"N",baseStats:{hp:55,atk:47,def:52,spa:40,spd:40,spe:41},abilities:{0:"Poison Point"},heightm:0.4,weightkg:7,color:"Blue",evos:["nidorina"]},
nidorina:{num:30,species:"Nidorina",types:["Poison"],gender:"N",baseStats:{hp:70,atk:62,def:67,spa:55,spd:55,spe:56},abilities:{0:"Poison Point"},heightm:0.8,weightkg:20,color:"Blue",prevo:"nidoranf",evos:["nidoqueen"],evoLevel:16}, 
nidoqueen:{num:31,species:"Nidoqueen",types:["Poison","Ground"],gender:"N",baseStats:{hp:90,atk:82,def:87,spa:75,spd:75,spe:76},abilities:{0:"Poison Point"},heightm:1.3,weightkg:60,color:"Blue",prevo:"nidorina",evoLevel:1},
nidoranm:{num:32,species:"NidoranM",types:["Poison"],gender:"N",baseStats:{hp:46,atk:57,def:40,spa:40,spd:40,spe:50},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.5,weightkg:9,color:"Purple",evos:["nidorino"]},
nidorino:{num:33,species:"Nidorino",types:["Poison"],gender:"N",baseStats:{hp:61,atk:72,def:57,spa:55,spd:55,spe:65},abilities:{0:"Poison Point",1:"Rivalry",DW:"Hustle"},heightm:0.9,weightkg:19.5,color:"Purple",prevo:"nidoranm",evos:["nidoking"],evoLevel:16},
nidoking:{num:34,species:"Nidoking",types:["Poison","Ground"],gender:"N",baseStats:{hp:81,atk:92,def:77,spa:75,spd:75,spe:85},abilities:{0:"Poison Point",1:"Rivalry",DW:"Sheer Force"},heightm:1.4,weightkg:62,color:"Purple",prevo:"nidorino",evoLevel:1},
clefairy:{num:35,species:"Clefairy",types:["Normal"],gender:"N",baseStats:{hp:70,atk:45,def:48,spa:60,spd:60,spe:35},abilities:{0:"Cute Charm",1:"Magic Guard",DW:"Friend Guard"},heightm:0.6,weightkg:7.5,color:"Pink",prevo:"cleffa",evos:["clefable"],evoLevel:1,eggGroups:["Fairy"]},
clefable:{num:36,species:"Clefable",types:["Normal"],gender:"N",baseStats:{hp:95,atk:70,def:73,spa:85,spd:85,spe:60},abilities:{0:"Cute Charm",1:"Magic Guard",DW:"Unaware"},heightm:1.3,weightkg:40,color:"Pink",prevo:"clefairy",evoLevel:1,eggGroups:["Fairy"]},
vulpix:{num:37,species:"Vulpix",types:["Fire"],gender:"N",baseStats:{hp:38,atk:41,def:40,spa:65,spd:65,spe:65},abilities:{0:"Flash Fire"}, heightm:0.6,weightkg:9.9,color:"Brown",evos:["ninetales"]},
ninetales:{num:38,species:"Ninetales",types:["Fire"],gender:"N",baseStats:{hp:73,atk:76,def:75,spa:100,spd:100,spe:100},abilities:{0:"Flash Fire"}, heightm:1.1,weightkg:19.9,color:"Yellow",prevo:"vulpix",evoLevel:1},
jigglypuff:{num:39,species:"Jigglypuff",types:["Normal"],gender:"N",baseStats:{hp:115,atk:45,def:20,spa:25,spd:25,spe:20},abilities:{0:"Cute Charm",DW:"Friend Guard"},heightm:0.5,weightkg:5.5,color:"Pink",prevo:"igglybuff",evos:["wigglytuff"],evoLevel:1,eggGroups:["Fairy"]},
wigglytuff:{num:40,species:"Wigglytuff",types:["Normal"],gender:"N",baseStats:{hp:140,atk:70,def:45,spa:50,spd:50,spe:45},abilities:{0:"Cute Charm",DW:"Frisk"},heightm:1,weightkg:12,color:"Pink",prevo:"jigglypuff",evoLevel:1,eggGroups:["Fairy"]},
zubat:{num:41,species:"Zubat",types:["Poison","Flying"],gender:"N",baseStats:{hp:40,atk:45,def:35,spa:40,spd:40,spe:55},abilities:{0:"Inner Focus"},heightm:0.8,weightkg:7.5,color:"Purple",evos:["golbat"]},
golbat:{num:42,species:"Golbat",types:["Poison","Flying"],gender:"N",baseStats:{hp:75,atk:80,def:70,spa:75,spd:75,spe:90},abilities:{0:"Inner Focus"}, heightm:1.6,weightkg:55,color:"Purple",prevo:"zubat",evos:["crobat"],evoLevel:22},
oddish:{num:43,species:"Oddish",types:["Grass","Poison"],gender:"N",baseStats:{hp:45,atk:50,def:55,spa:75,spd:75,spe:30},abilities:{0:"Chlorophyll",DW:"Run Away"},heightm:0.5,weightkg:5.4,color:"Blue",evos:["gloom"],eggGroups:["Plant"]},
gloom:{num:44,species:"Gloom",types:["Grass","Poison"],gender:"N",baseStats:{hp:60,atk:65,def:70,spa:85,spd:85,spe:40},abilities:{0:"Chlorophyll",DW:"Stench"},heightm:0.8,weightkg:8.6,color:"Blue",prevo:"oddish",evos:["vileplume","bellossom"],evoLevel:21,eggGroups:["Plant"]},
vileplume:{num:45,species:"Vileplume",types:["Grass","Poison"],gender:"N",baseStats:{hp:75,atk:80,def:85,spa:100,spd:100,spe:50},abilities:{0:"Chlorophyll",DW:"Effect Spore"},heightm:1.2,weightkg:18.6,color:"Red",prevo:"gloom",evoLevel:1,eggGroups:["Plant"]},
paras:{num:46,species:"Paras",types:["Bug","Grass"],gender:"N",baseStats:{hp:35,atk:70,def:55,spa:55,spd:55,spe:25},abilities:{0:"Effect Spore"},heightm:0.3,weightkg:5.4,color:"Red",evos:["parasect"]},
parasect:{num:47,species:"Parasect",types:["Bug","Grass"],gender:"N",baseStats:{hp:60,atk:95,def:80,spa:80,spd:80,spe:30},abilities:{0:"Effect Spore"},heightm:1,weightkg:29.5,color:"Red",prevo:"paras",evoLevel:24},
venonat:{num:48,species:"Venonat",types:["Bug","Poison"],gender:"N",baseStats:{hp:60,atk:55,def:50,spa:40,spd:40,spe:45},abilities:{0:"Compoundeyes",1:"Tinted Lens"},heightm:1,weightkg:30,color:"Purple",evos:["venomoth"],eggGroups:["Bug"]},
venomoth:{num:49,species:"Venomoth",types:["Bug","Poison"],gender:"N",baseStats:{hp:70,atk:65,def:60,spa:90,spd:90,spe:90},abilities:{0:"Shield Dust",1:"Tinted Lens"},heightm:1.5,weightkg:12.5,color:"Purple",prevo:"venonat",evoLevel:31,eggGroups:["Bug"]},
diglett:{num:50,species:"Diglett",types:["Ground"],gender:"N",baseStats:{hp:10,atk:55,def:25,spa:45,spd:45,spe:95},abilities:{0:"Sand Veil",1:"Arena Trap"},heightm:0.2,weightkg:0.8,color:"Brown",evos:["dugtrio"]},
dugtrio:{num:51,species:"Dugtrio",types:["Ground"],gender:"N",baseStats:{hp:35,atk:80,def:50,spa:70,spd:70,spe:120},abilities:{0:"Sand Veil",1:"Arena Trap"},heightm:0.7,weightkg:33.3,color:"Brown",prevo:"diglett",evoLevel:26},
meowth:{num:52,species:"Meowth",types:["Normal"],gender:"N",baseStats:{hp:40,atk:45,def:35,spa:40,spd:40,spe:90},abilities:{0:"Pickup",1:"Technician",DW:"Unnerve"},heightm:0.4,weightkg:4.2,color:"Yellow",evos:["persian"],eggGroups:["Ground"]},
persian:{num:53,species:"Persian",types:["Normal"],gender:"N",baseStats:{hp:65,atk:70,def:60,spa:65,spd:65,spe:115},abilities:{0:"Limber",1:"Technician",DW:"Unnerve"},heightm:1,weightkg:32,color:"Yellow",prevo:"meowth",evoLevel:28,eggGroups:["Ground"]},
psyduck:{num:54,species:"Psyduck",types:["Water"],gender:"N",baseStats:{hp:50,atk:52,def:48,spa:50,spd:50,spe:55},abilities:{0:"Damp",1:"Cloud Nine"},heightm:0.8,weightkg:19.6,color:"Yellow",evos:["golduck"]},
golduck:{num:55,species:"Golduck",types:["Water"],gender:"N",baseStats:{hp:80,atk:82,def:78,spa:80,spd:80,spe:85},abilities:{0:"Damp",1:"Cloud Nine"},heightm:1.7,weightkg:76.6,color:"Blue",prevo:"psyduck",evoLevel:33},
mankey:{num:56,species:"Mankey",types:["Fighting"],gender:"N",baseStats:{hp:40,atk:80,def:35,spa:35,spd:35,spe:70},abilities:{0:"Vital Spirit",1:"Anger Point",DW:"Defiant"},heightm:0.5,weightkg:28,color:"Brown",evos:["primeape"],eggGroups:["Ground"]},
primeape:{num:57,species:"Primeape",types:["Fighting"],gender:"N",baseStats:{hp:65,atk:105,def:60,spa:60,spd:60,spe:95},abilities:{0:"Vital Spirit",1:"Anger Point",DW:"Defiant"},heightm:1,weightkg:32,color:"Brown",prevo:"mankey",evoLevel:28,eggGroups:["Ground"]},
growlithe:{num:58,species:"Growlithe",types:["Fire"],gender:"N",baseStats:{hp:55,atk:70,def:45,spa:50,spd:50,spe:60},abilities:{0:"Intimidate"},heightm:0.7,weightkg:19,color:"Brown",evos:["arcanine"]},
arcanine:{num:59,species:"Arcanine",types:["Fire"],gender:"N",baseStats:{hp:90,atk:110,def:80,spa:80,spd:80,spe:95},abilities:{0:"Intimidate"},heightm:1.9,weightkg:155,color:"Brown",prevo:"growlithe",evoLevel:1},
poliwag:{num:60,species:"Poliwag",types:["Water"],gender:"N",baseStats:{hp:40,atk:50,def:40,spa:40,spd:40,spe:90},abilities:{0:"Water Absorb",1:"Damp"},heightm:0.6,weightkg:12.4,color:"Blue",evos:["poliwhirl"],eggGroups:["Water 1"]},
poliwhirl:{num:61,species:"Poliwhirl",types:["Water"],gender:"N",baseStats:{hp:65,atk:65,def:65,spa:50,spd:50,spe:90},abilities:{0:"Water Absorb",1:"Damp"},heightm:1,weightkg:20,color:"Blue",prevo:"poliwag",evos:["poliwrath","politoed"],evoLevel:25,eggGroups:["Water 1"]},
poliwrath:{num:62,species:"Poliwrath",types:["Water","Fighting"],gender:"N",baseStats:{hp:90,atk:85,def:95,spa:70,spd:70,spe:70},abilities:{0:"Water Absorb",1:"Damp"},heightm:1.3,weightkg:54,color:"Blue",prevo:"poliwhirl",evoLevel:1,eggGroups:["Water 1"]},
abra:{num:63,species:"Abra",types:["Psychic"],gender:"N",baseStats:{hp:25,atk:20,def:15,spa:105,spd:105,spe:90},abilities:{0:"Synchronize",1:"Inner Focus"},heightm:0.9,weightkg:19.5,color:"Brown",evos:["kadabra"],eggGroups:["Humanshape"]},
kadabra:{num:64,species:"Kadabra",types:["Psychic"],gender:"N",baseStats:{hp:40,atk:35,def:30,spa:120,spd:120,spe:105},abilities:{0:"Synchronize",1:"Inner Focus"},heightm:1.3,weightkg:56.5,color:"Brown",prevo:"abra",evos:["alakazam"],evoLevel:16,eggGroups:["Humanshape"]},
alakazam:{num:65,species:"Alakazam",types:["Psychic"],gender:"N",baseStats:{hp:55,atk:50,def:45,spa:135,spd:135,spe:120},abilities:{0:"Synchronize",1:"Inner Focus"},heightm:1.5,weightkg:48,color:"Brown",prevo:"kadabra",evoLevel:1,eggGroups:["Humanshape"]},
machop:{num:66,species:"Machop",types:["Fighting"],gender:"N",baseStats:{hp:70,atk:80,def:50,spa:35,spd:35,spe:35},abilities:{0:"Guts",1:"No Guard",DW:"Steadfast"},heightm:0.8,weightkg:19.5,color:"Gray",evos:["machoke"],eggGroups:["Humanshape"]},
machoke:{num:67,species:"Machoke",types:["Fighting"],gender:"N",baseStats:{hp:80,atk:100,def:70,spa:50,spd:50,spe:45},abilities:{0:"Guts",1:"No Guard",DW:"Steadfast"},heightm:1.5,weightkg:70.5,color:"Gray",prevo:"machop",evos:["machamp"],evoLevel:28,eggGroups:["Humanshape"]},
machamp:{num:68,species:"Machamp",types:["Fighting"],gender:"N",baseStats:{hp:90,atk:130,def:80,spa:65,spd:65,spe:55},abilities:{0:"Guts",1:"No Guard",DW:"Steadfast"},heightm:1.6,weightkg:130,color:"Gray",prevo:"machoke",evoLevel:1,eggGroups:["Humanshape"]},
bellsprout:{num:69,species:"Bellsprout",types:["Grass","Poison"],gender:"N",baseStats:{hp:50,atk:75,def:35,spa:70,spd:70,spe:40},abilities:{0:"Chlorophyll",DW:"Gluttony"},heightm:0.7,weightkg:4,color:"Green",evos:["weepinbell"],eggGroups:["Plant"]},
weepinbell:{num:70,species:"Weepinbell",types:["Grass","Poison"],gender:"N",baseStats:{hp:65,atk:90,def:50,spa:85,spd:85,spe:55},abilities:{0:"Chlorophyll",DW:"Gluttony"},heightm:1,weightkg:6.4,color:"Green",prevo:"bellsprout",evos:["victreebel"],evoLevel:21,eggGroups:["Plant"]},
victreebel:{num:71,species:"Victreebel",types:["Grass","Poison"],gender:"N",baseStats:{hp:80,atk:105,def:65,spa:100,spd:100,spe:70},abilities:{0:"Chlorophyll",DW:"Gluttony"},heightm:1.7,weightkg:15.5,color:"Green",prevo:"weepinbell",evoLevel:1,eggGroups:["Plant"]},
tentacool:{num:72,species:"Tentacool",types:["Water","Poison"],gender:"N",baseStats:{hp:40,atk:40,def:35,spa:100,spd:100,spe:70},abilities:{0:"Clear Body",1:"Liquid Ooze",DW:"Rain Dish"},heightm:0.9,weightkg:45.5,color:"Blue",evos:["tentacruel"],eggGroups:["Water 3"]},
tentacruel:{num:73,species:"Tentacruel",types:["Water","Poison"],gender:"N",baseStats:{hp:80,atk:70,def:65,spa:120,spd:120,spe:100},abilities:{0:"Clear Body",1:"Liquid Ooze",DW:"Rain Dish"},heightm:1.6,weightkg:55,color:"Blue",prevo:"tentacool",evoLevel:30,eggGroups:["Water 3"]},
geodude:{num:74,species:"Geodude",types:["Rock","Ground"],gender:"N",baseStats:{hp:40,atk:80,def:100,spa:30,spd:30,spe:20},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand Veil"},heightm:0.4,weightkg:20,color:"Brown",evos:["graveler"],eggGroups:["Mineral"]},
graveler:{num:75,species:"Graveler",types:["Rock","Ground"],gender:"N",baseStats:{hp:55,atk:95,def:115,spa:45,spd:45,spe:35},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand Veil"},heightm:1,weightkg:105,color:"Brown",prevo:"geodude",evos:["golem"],evoLevel:25,eggGroups:["Mineral"]},
golem:{num:76,species:"Golem",types:["Rock","Ground"],gender:"N",baseStats:{hp:80,atk:110,def:130,spa:55,spd:55,spe:45},abilities:{0:"Rock Head",1:"Sturdy",DW:"Sand Veil"},heightm:1.4,weightkg:300,color:"Brown",prevo:"graveler",evoLevel:1,eggGroups:["Mineral"]},
ponyta:{num:77,species:"Ponyta",types:["Fire"],gender:"N",baseStats:{hp:50,atk:85,def:55,spa:65,spd:65,spe:90},abilities:{0:"Run Away",1:"Flash Fire",DW:"Flame Body"},heightm:1,weightkg:30,color:"Yellow",evos:["rapidash"],eggGroups:["Ground"]},
rapidash:{num:78,species:"Rapidash",types:["Fire"],gender:"N",baseStats:{hp:65,atk:100,def:70,spa:80,spd:80,spe:105},abilities:{0:"Run Away",1:"Flash Fire",DW:"Flame Body"},heightm:1.7,weightkg:95,color:"Yellow",prevo:"ponyta",evoLevel:40,eggGroups:["Ground"]},
slowpoke:{num:79,species:"Slowpoke",types:["Water","Psychic"],gender:"N",baseStats:{hp:90,atk:65,def:65,spa:40,spd:40,spe:15},abilities:{0:"Oblivious",1:"Own Tempo",DW:"Regenerator"},heightm:1.2,weightkg:36,color:"Pink",evos:["slowbro","slowking"],eggGroups:["Monster","Water 1"]},
slowbro:{num:80,species:"Slowbro",types:["Water","Psychic"],gender:"N",baseStats:{hp:95,atk:75,def:110,spa:80,spd:80,spe:30},abilities:{0:"Oblivious",1:"Own Tempo",DW:"Regenerator"},heightm:1.6,weightkg:78.5,color:"Pink",prevo:"slowpoke",evoLevel:37,eggGroups:["Monster","Water 1"]},
magnemite:{num:81,species:"Magnemite",types:["Electric"],gender:"N",baseStats:{hp:25,atk:35,def:70,spa:95,spd:95,spe:45},abilities:{0:"Magnet Pull",1:"Sturdy",DW:"Analytic"},heightm:0.3,weightkg:6,color:"Gray",evos:["magneton"],eggGroups:["Mineral"]},
magneton:{num:82,species:"Magneton",types:["Electric"],gender:"N",baseStats:{hp:50,atk:60,def:95,spa:120,spd:120,spe:70},abilities:{0:"Magnet Pull",1:"Sturdy",DW:"Analytic"},heightm:1,weightkg:60,color:"Gray",prevo:"magnemite",evos:["magnezone"],evoLevel:30,eggGroups:["Mineral"]},
farfetchd:{num:83,species:"Farfetch'd",types:["Normal","Flying"],gender:"N",baseStats:{hp:52,atk:65,def:55,spa:58,spd:58,spe:60},abilities:{0:"Keen Eye",1:"Inner Focus",DW:"Defiant"},heightm:0.8,weightkg:15,color:"Brown",eggGroups:["Flying","Ground"]},
doduo:{num:84,species:"Doduo",types:["Normal","Flying"],gender:"N",baseStats:{hp:35,atk:85,def:45,spa:35,spd:35,spe:75},abilities:{0:"Run Away",1:"Early Bird",DW:"Tangled Feet"},heightm:1.4,weightkg:39.2,color:"Brown",evos:["dodrio"],eggGroups:["Flying"]},
dodrio:{num:85,species:"Dodrio",types:["Normal","Flying"],gender:"N",baseStats:{hp:60,atk:110,def:70,spa:60,spd:60,spe:100},abilities:{0:"Run Away",1:"Early Bird",DW:"Tangled Feet"},heightm:1.8,weightkg:85.2,color:"Brown",prevo:"doduo",evoLevel:31,eggGroups:["Flying"]},
seel:{num:86,species:"Seel",types:["Water"],gender:"N",baseStats:{hp:65,atk:45,def:55,spa:70,spd:70,spe:45},abilities:{0:"Thick Fat",1:"Hydration",DW:"Ice Body"},heightm:1.1,weightkg:90,color:"White",evos:["dewgong"],eggGroups:["Water 1","Ground"]},
dewgong:{num:87,species:"Dewgong",types:["Water","Ice"],gender:"N",baseStats:{hp:90,atk:70,def:80,spa:95,spd:95,spe:70},abilities:{0:"Thick Fat",1:"Hydration",DW:"Ice Body"},heightm:1.7,weightkg:120,color:"White",prevo:"seel",evoLevel:34,eggGroups:["Water 1","Ground"]},
grimer:{num:88,species:"Grimer",types:["Poison"],gender:"N",baseStats:{hp:80,atk:80,def:50,spa:40,spd:40,spe:25},abilities:{0:"Stench",1:"Sticky Hold",DW:"Poison Touch"},heightm:0.9,weightkg:30,color:"Purple",evos:["muk"],eggGroups:["Indeterminate"]},
muk:{num:89,species:"Muk",types:["Poison"],gender:"N",baseStats:{hp:105,atk:105,def:75,spa:65,spd:65,spe:50},abilities:{0:"Stench",1:"Sticky Hold",DW:"Poison Touch"},heightm:1.2,weightkg:30,color:"Purple",prevo:"grimer",evoLevel:38,eggGroups:["Indeterminate"]},
shellder:{num:90,species:"Shellder",types:["Water"],gender:"N",baseStats:{hp:30,atk:65,def:100,spa:45,spd:45,spe:40},abilities:{0:"Shell Armor",1:"Skill Link",DW:"Overcoat"},heightm:0.3,weightkg:4,color:"Purple",evos:["cloyster"],eggGroups:["Water 3"]},
cloyster:{num:91,species:"Cloyster",types:["Water","Ice"],gender:"N",baseStats:{hp:50,atk:95,def:180,spa:85,spd:85,spe:70},abilities:{0:"Shell Armor",1:"Skill Link",DW:"Overcoat"},heightm:1.5,weightkg:132.5,color:"Purple",prevo:"shellder",evoLevel:1,eggGroups:["Water 3"]},
gastly:{num:92,species:"Gastly",types:["Ghost","Poison"],gender:"N",baseStats:{hp:30,atk:35,def:30,spa:100,spd:100,spe:80},abilities:{0:"Levitate"},heightm:1.3,weightkg:0.1,color:"Purple",evos:["haunter"],eggGroups:["Indeterminate"]},
haunter:{num:93,species:"Haunter",types:["Ghost","Poison"],gender:"N",baseStats:{hp:45,atk:50,def:45,spa:115,spd:115,spe:95},abilities:{0:"Levitate"},heightm:1.6,weightkg:0.1,color:"Purple",prevo:"gastly",evos:["gengar"],evoLevel:25,eggGroups:["Indeterminate"]},
gengar:{num:94,species:"Gengar",types:["Ghost","Poison"],gender:"N",baseStats:{hp:60,atk:65,def:60,spa:130,spd:130,spe:110},abilities:{0:"Levitate"},heightm:1.5,weightkg:40.5,color:"Purple",prevo:"haunter",evoLevel:1,eggGroups:["Indeterminate"]},
onix:{num:95,species:"Onix",types:["Rock","Ground"],gender:"N",baseStats:{hp:35,atk:45,def:160,spa:30,spd:30,spe:70},abilities:{0:"Rock Head",1:"Sturdy",DW:"Weak Armor"},heightm:8.8,weightkg:210,color:"Gray",evos:["steelix"],eggGroups:["Mineral"]},
drowzee:{num:96,species:"Drowzee",types:["Psychic"],gender:"N",baseStats:{hp:60,atk:48,def:45,spa:90,spd:90,spe:42},abilities:{0:"Insomnia",1:"Forewarn",DW:"Inner Focus"},heightm:1,weightkg:32.4,color:"Yellow",evos:["hypno"],eggGroups:["Humanshape"]},
hypno:{num:97,species:"Hypno",types:["Psychic"],gender:"N",baseStats:{hp:85,atk:73,def:70,spa:115,spd:115,spe:67},abilities:{0:"Insomnia",1:"Forewarn",DW:"Inner Focus"},heightm:1.6,weightkg:75.6,color:"Yellow",prevo:"drowzee",evoLevel:26,eggGroups:["Humanshape"]},
krabby:{num:98,species:"Krabby",types:["Water"],gender:"N",baseStats:{hp:30,atk:105,def:90,spa:25,spd:25,spe:50},abilities:{0:"Hyper Cutter",1:"Shell Armor",DW:"Sheer Force"},heightm:0.4,weightkg:6.5,color:"Red",evos:["kingler"],eggGroups:["Water 3"]},
kingler:{num:99,species:"Kingler",types:["Water"],gender:"N",baseStats:{hp:55,atk:130,def:115,spa:50,spd:50,spe:75},abilities:{0:"Hyper Cutter",1:"Shell Armor",DW:"Sheer Force"},heightm:1.3,weightkg:60,color:"Red",prevo:"krabby",evoLevel:28,eggGroups:["Water 3"]},
voltorb:{num:100,species:"Voltorb",types:["Electric"],gender:"N",baseStats:{hp:40,atk:30,def:50,spa:55,spd:55,spe:100},abilities:{0:"Soundproof",1:"Static",DW:"Aftermath"},heightm:0.5,weightkg:10.4,color:"Red",evos:["electrode"],eggGroups:["Mineral"]},
electrode:{num:101,species:"Electrode",types:["Electric"],gender:"N",baseStats:{hp:60,atk:50,def:70,spa:80,spd:80,spe:140},abilities:{0:"Soundproof",1:"Static",DW:"Aftermath"},heightm:1.2,weightkg:66.6,color:"Red",prevo:"voltorb",evoLevel:30,eggGroups:["Mineral"]},
exeggcute:{num:102,species:"Exeggcute",types:["Grass","Psychic"],gender:"N",baseStats:{hp:60,atk:40,def:80,spa:60,spd:60,spe:40},abilities:{0:"Chlorophyll",DW:"Harvest"},heightm:0.4,weightkg:2.5,color:"Pink",evos:["exeggutor"],eggGroups:["Plant"]},
exeggutor:{num:103,species:"Exeggutor",types:["Grass","Psychic"],gender:"N",baseStats:{hp:95,atk:95,def:85,spa:125,spd:125,spe:55},abilities:{0:"Chlorophyll",DW:"Harvest"},heightm:2,weightkg:120,color:"Yellow",prevo:"exeggcute",evoLevel:1,eggGroups:["Plant"]},
cubone:{num:104,species:"Cubone",types:["Ground"],gender:"N",baseStats:{hp:50,atk:50,def:95,spa:40,spd:40,spe:35},abilities:{0:"Rock Head",1:"Lightningrod",DW:"Battle Armor"},heightm:0.4,weightkg:6.5,color:"Brown",evos:["marowak"],eggGroups:["Monster"]},
marowak:{num:105,species:"Marowak",types:["Ground"],gender:"N",baseStats:{hp:60,atk:80,def:110,spa:50,spd:50,spe:45},abilities:{0:"Rock Head",1:"Lightningrod",DW:"Battle Armor"},heightm:1,weightkg:45,color:"Brown",prevo:"cubone",evoLevel:28,eggGroups:["Monster"]},
hitmonlee:{num:106,species:"Hitmonlee",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:120,def:53,spa:35,spd:35,spe:87},abilities:{0:"Limber",1:"Reckless",DW:"Unburden"},heightm:1.5,weightkg:49.8,color:"Brown",prevo:"tyrogue",evoLevel:20,eggGroups:["Humanshape"]},
hitmonchan:{num:107,species:"Hitmonchan",types:["Fighting"],gender:"N",baseStats:{hp:50,atk:105,def:79,spa:35,spd:35,spe:76},abilities:{0:"Keen Eye",1:"Iron Fist",DW:"Inner Focus"},heightm:1.4,weightkg:50.2,color:"Brown",prevo:"tyrogue",evoLevel:20,eggGroups:["Humanshape"]},
lickitung:{num:108,species:"Lickitung",types:["Normal"],gender:"N",baseStats:{hp:90,atk:55,def:75,spa:60,spd:60,spe:30},abilities:{0:"Own Tempo",1:"Oblivious",DW:"Cloud Nine"},heightm:1.2,weightkg:65.5,color:"Pink",evos:["lickilicky"],eggGroups:["Monster"]},
koffing:{num:109,species:"Koffing",types:["Poison"],gender:"N",baseStats:{hp:40,atk:65,def:95,spa:60,spd:60,spe:35},abilities:{0:"Levitate"},heightm:0.6,weightkg:1,color:"Purple",evos:["weezing"],eggGroups:["Indeterminate"]},
weezing:{num:110,species:"Weezing",types:["Poison"],gender:"N",baseStats:{hp:65,atk:90,def:120,spa:85,spd:85,spe:60},abilities:{0:"Levitate"},heightm:1.2,weightkg:9.5,color:"Purple",prevo:"koffing",evoLevel:35,eggGroups:["Indeterminate"]},
rhyhorn:{num:111,species:"Rhyhorn",types:["Ground","Rock"],gender:"N",baseStats:{hp:80,atk:85,def:95,spa:30,spd:30,spe:25},abilities:{0:"Lightningrod",1:"Rock Head",DW:"Reckless"},heightm:1,weightkg:115,color:"Gray",evos:["rhydon"],eggGroups:["Monster","Ground"]},
rhydon:{num:112,species:"Rhydon",types:["Ground","Rock"],gender:"N",baseStats:{hp:105,atk:130,def:120,spa:45,spd:45,spe:40},abilities:{0:"Lightningrod",1:"Rock Head",DW:"Reckless"},heightm:1.9,weightkg:120,color:"Gray",prevo:"rhyhorn",evos:["rhyperior"],evoLevel:42,eggGroups:["Monster","Ground"]},
chansey:{num:113,species:"Chansey",types:["Normal"],gender:"N",baseStats:{hp:250,atk:5,def:5,spa:105,spd:105,spe:50},abilities:{0:"Natural Cure"},heightm:1.1,weightkg:34.6,color:"Pink",prevo:"happiny",evoLevel:1},
tangela:{num:114,species:"Tangela",types:["Grass"],gender:"N",baseStats:{hp:65,atk:55,def:115,spa:100,spd:100,spe:60},abilities:{0:"Chlorophyll",1:"Leaf Guard",DW:"Regenerator"},heightm:1,weightkg:35,color:"Blue",evos:["tangrowth"],eggGroups:["Plant"]},
kangaskhan:{num:115,species:"Kangaskhan",types:["Normal"],gender:"N",baseStats:{hp:105,atk:95,def:80,spa:40,spd:40,spe:90},abilities:{0:"Early Bird",1:"Scrappy",DW:"Inner Focus"},heightm:2.2,weightkg:80,color:"Brown",eggGroups:["Monster"]},
horsea:{num:116,species:"Horsea",types:["Water"],gender:"N",baseStats:{hp:30,atk:40,def:70,spa:70,spd:79,spe:60},abilities:{0:"Swift Swim",1:"Sniper",DW:"Damp"},heightm:0.4,weightkg:8,color:"Blue",evos:["seadra"],eggGroups:["Water 1","Dragon"]},
seadra:{num:117,species:"Seadra",types:["Water"],gender:"N",baseStats:{hp:55,atk:65,def:95,spa:95,spd:95,spe:85},abilities:{0:"Poison Point",1:"Sniper",DW:"Damp"},heightm:1.2,weightkg:25,color:"Blue",prevo:"horsea",evos:["kingdra"],evoLevel:32,eggGroups:["Water 1","Dragon"]},
goldeen:{num:118,species:"Goldeen",types:["Water"],gender:"N",baseStats:{hp:45,atk:67,def:60,spa:50,spd:50,spe:63},abilities:{0:"Swift Swim",1:"Water Veil",DW:"Lightningrod"},heightm:0.6,weightkg:15,color:"Red",evos:["seaking"],eggGroups:["Water 2"]},
seaking:{num:119,species:"Seaking",types:["Water"],gender:"N",baseStats:{hp:80,atk:92,def:65,spa:80,spd:80,spe:68},abilities:{0:"Swift Swim",1:"Water Veil",DW:"Lightningrod"},heightm:1.3,weightkg:39,color:"Red",prevo:"goldeen",evoLevel:33,eggGroups:["Water 2"]},
staryu:{num:120,species:"Staryu",types:["Water"],gender:"N",baseStats:{hp:30,atk:45,def:55,spa:70,spd:70,spe:85},abilities:{0:"Illuminate",1:"Natural Cure",DW:"Analytic"},heightm:0.8,weightkg:34.5,color:"Brown",evos:["starmie"],eggGroups:["Water 3"]},
starmie:{num:121,species:"Starmie",types:["Water","Psychic"],gender:"N",baseStats:{hp:60,atk:75,def:85,spa:100,spd:100,spe:115},abilities:{0:"Illuminate",1:"Natural Cure",DW:"Analytic"},heightm:1.1,weightkg:80,color:"Purple",prevo:"staryu",evoLevel:1,eggGroups:["Water 3"]},
mrmime:{num:122,species:"Mr. Mime",types:["Psychic"],gender:"N",baseStats:{hp:40,atk:45,def:65,spa:100,spd:100,spe:90},abilities:{0:"Soundproof",1:"Filter",DW:"Technician"},heightm:1.3,weightkg:54.5,color:"Pink",prevo:"mimejr",evoLevel:1,evoMove:"Mimic",eggGroups:["Humanshape"]},
scyther:{num:123,species:"Scyther",types:["Bug","Flying"],gender:"N",baseStats:{hp:70,atk:110,def:80,spa:55,spd:55,spe:105},abilities:{0:"Swarm",1:"Technician",DW:"Steadfast"},heightm:1.5,weightkg:56,color:"Green",evos:["scizor"],eggGroups:["Bug"]},
jynx:{num:124,species:"Jynx",types:["Ice","Psychic"],gender:"N",baseStats:{hp:65,atk:50,def:35,spa:95,spd:95,spe:95},abilities:{0:"Oblivious",1:"Forewarn",DW:"Dry Skin"},heightm:1.4,weightkg:40.6,color:"Red",prevo:"smoochum",evoLevel:30,eggGroups:["Humanshape"]},
electabuzz:{num:125,species:"Electabuzz",types:["Electric"],gender:"N",baseStats:{hp:65,atk:83,def:57,spa:85,spd:85,spe:105},abilities:{0:"Static",DW:"Vital Spirit"},heightm:1.1,weightkg:30,color:"Yellow",prevo:"elekid",evos:["electivire"],evoLevel:30,eggGroups:["Humanshape"]},
magmar:{num:126,species:"Magmar",types:["Fire"],gender:"N",baseStats:{hp:65,atk:95,def:57,spa:85,spd:85,spe:93},abilities:{0:"Flame Body",DW:"Vital Spirit"},heightm:1.3,weightkg:44.5,color:"Red",prevo:"magby",evos:["magmortar"],evoLevel:30,eggGroups:["Humanshape"]},
pinsir:{num:127,species:"Pinsir",types:["Bug"],gender:"N",baseStats:{hp:65,atk:125,def:100,spa:55,spd:55,spe:85},abilities:{0:"Hyper Cutter",1:"Mold Breaker",DW:"Moxie"},heightm:1.5,weightkg:55,color:"Brown",eggGroups:["Bug"]},
tauros:{num:128,species:"Tauros",types:["Normal"],gender:"N",baseStats:{hp:75,atk:100,def:95,spa:70,spd:70,spe:110},abilities:{0:"Intimidate",1:"Anger Point",DW:"Sheer Force"},heightm:1.4,weightkg:88.4,color:"Brown",eggGroups:["Ground"]},
magikarp:{num:129,species:"Magikarp",types:["Water"],gender:"N",baseStats:{hp:20,atk:10,def:55,spa:20,spd:20,spe:80},abilities:{0:"Swift Swim",DW:"Rattled"},heightm:0.9,weightkg:10,color:"Red",evos:["gyarados"],eggGroups:["Water 2","Dragon"]},
gyarados:{num:130,species:"Gyarados",types:["Water","Flying"],gender:"N",baseStats:{hp:95,atk:125,def:79,spa:100,spd:100,spe:81},abilities:{0:"Intimidate",DW:"Moxie"},heightm:6.5,weightkg:235,color:"Blue",prevo:"magikarp",evoLevel:20,eggGroups:["Water 2","Dragon"]},
lapras:{num:131,species:"Lapras",types:["Water","Ice"],gender:"N",baseStats:{hp:130,atk:85,def:80,spa:95,spd:95,spe:60},abilities:{0:"Water Absorb",1:"Shell Armor",DW:"Hydration"},heightm:2.5,weightkg:220,color:"Blue",eggGroups:["Monster","Water 1"]},
ditto:{num:132,species:"Ditto",types:["Normal"],gender:"N",baseStats:{hp:48,atk:48,def:48,spa:48,spd:48,spe:48},abilities:{0:"Limber",DW:"Imposter"},heightm:0.3,weightkg:4,color:"Purple",eggGroups:["Ditto"]},
eevee:{num:133,species:"Eevee",types:["Normal"],gender:"N",baseStats:{hp:55,atk:55,def:50,spa:65,spd:65,spe:55},abilities:{0:"Run Away",1:"Adaptability",DW:"Anticipation"},heightm:0.3,weightkg:6.5,color:"Brown",evos:["vaporeon","jolteon","flareon","espeon","umbreon","leafeon","glaceon"],eggGroups:["Ground"]},
vaporeon:{num:134,species:"Vaporeon",types:["Water"],gender:"N",baseStats:{hp:130,atk:65,def:60,spa:110,spd:110,spe:65},abilities:{0:"Water Absorb",DW:"Hydration"},heightm:1,weightkg:29,color:"Blue",prevo:"eevee",evoLevel:1,eggGroups:["Ground"]},
jolteon:{num:135,species:"Jolteon",types:["Electric"],gender:"N",baseStats:{hp:65,atk:65,def:60,spa:110,spd:110,spe:130},abilities:{0:"Volt Absorb",DW:"Quick Feet"},heightm:0.8,weightkg:24.5,color:"Yellow",prevo:"eevee",evoLevel:1,eggGroups:["Ground"]},
flareon:{num:136,species:"Flareon",types:["Fire"],gender:"N",baseStats:{hp:65,atk:130,def:60,spa:110,spd:110,spe:65},abilities:{0:"Flash Fire",DW:"Guts"},heightm:0.9,weightkg:25,color:"Red",prevo:"eevee",evoLevel:1,eggGroups:["Ground"]},
porygon:{num:137,species:"Porygon",types:["Normal"],gender:"N",baseStats:{hp:65,atk:60,def:70,spa:75,spd:75,spe:40},abilities:{0:"Trace",1:"Download",DW:"Analytic"},heightm:0.8,weightkg:36.5,color:"Pink",evos:["porygon2"],eggGroups:["Mineral"]},
omanyte:{num:138,species:"Omanyte",types:["Rock","Water"],gender:"N",baseStats:{hp:35,atk:40,def:100,spa:90,spd:90,spe:35},abilities:{0:"Swift Swim",1:"Shell Armor",DW:"Weak Armor"},heightm:0.4,weightkg:7.5,color:"Blue",evos:["omastar"],eggGroups:["Water 1","Water 3"]},
omastar:{num:139,species:"Omastar",types:["Rock","Water"],gender:"N",baseStats:{hp:70,atk:60,def:125,spa:115,spd:115,spe:55},abilities:{0:"Swift Swim",1:"Shell Armor",DW:"Weak Armor"},heightm:1,weightkg:35,color:"Blue",prevo:"omanyte",evoLevel:40,eggGroups:["Water 1","Water 3"]},
kabuto:{num:140,species:"Kabuto",types:["Rock","Water"],gender:"N",baseStats:{hp:30,atk:80,def:90,spa:45,spd:45,spe:55},abilities:{0:"Swift Swim",1:"Battle Armor",DW:"Weak Armor"},heightm:0.5,weightkg:11.5,color:"Brown",evos:["kabutops"],eggGroups:["Water 1","Water 3"]},
kabutops:{num:141,species:"Kabutops",types:["Rock","Water"],gender:"N",baseStats:{hp:60,atk:115,def:105,spa:70,spd:70,spe:80},abilities:{0:"Swift Swim",1:"Battle Armor",DW:"Weak Armor"},heightm:1.3,weightkg:40.5,color:"Brown",prevo:"kabuto",evoLevel:40,eggGroups:["Water 1","Water 3"]},
aerodactyl:{num:142,species:"Aerodactyl",types:["Rock","Flying"],gender:"N",baseStats:{hp:80,atk:105,def:65,spa:60,spd:60,spe:130},abilities:{0:"Rock Head",1:"Pressure",DW:"Unnerve"},heightm:1.8,weightkg:59,color:"Purple",eggGroups:["Flying"]},
snorlax:{num:143,species:"Snorlax",types:["Normal"],gender:"N",baseStats:{hp:160,atk:110,def:65,spa:65,spd:65,spe:30},abilities:{0:"Immunity",1:"Thick Fat",DW:"Gluttony"},heightm:2.1,weightkg:460,color:"Black",prevo:"munchlax",evoLevel:1,eggGroups:["Monster"]},
articuno:{num:144,species:"Articuno",types:["Ice","Flying"],gender:"N",baseStats:{hp:90,atk:85,def:100,spa:125,spd:125,spe:85},abilities:{0:"Pressure",DW:"Snow Cloak"},heightm:1.7,weightkg:55.4,color:"Blue",eggGroups:["No Eggs"]},
zapdos:{num:145,species:"Zapdos",types:["Electric","Flying"],gender:"N",baseStats:{hp:90,atk:90,def:85,spa:125,spd:125,spe:100},abilities:{0:"Pressure",DW:"Lightningrod"},heightm:1.6,weightkg:52.6,color:"Yellow",eggGroups:["No Eggs"]},
moltres:{num:146,species:"Moltres",types:["Fire","Flying"],gender:"N",baseStats:{hp:90,atk:100,def:90,spa:125,spd:125,spe:90},abilities:{0:"Pressure",DW:"Flame Body"},heightm:2,weightkg:60,color:"Yellow",eggGroups:["No Eggs"]},
dratini:{num:147,species:"Dratini",types:["Dragon"],gender:"N",baseStats:{hp:41,atk:64,def:45,spa:50,spd:50,spe:50},abilities:{0:"Shed Skin"},heightm:1.8,weightkg:3.3,color:"Blue",evos:["dragonair"],eggGroups:["Water 1","Dragon"]},
dragonair:{num:148,species:"Dragonair",types:["Dragon"],gender:"N",baseStats:{hp:61,atk:84,def:65,spa:70,spd:70,spe:70},abilities:{0:"Shed Skin"},heightm:4,weightkg:16.5,color:"Blue",prevo:"dratini",evos:["dragonite"],evoLevel:30,eggGroups:["Water 1","Dragon"]},
dragonite:{num:149,species:"Dragonite",types:["Dragon","Flying"],gender:"N",baseStats:{hp:91,atk:134,def:95,spa:100,spd:100,spe:80},abilities:{0:"Inner Focus"},heightm:2.2,weightkg:210,color:"Brown",prevo:"dragonair",evoLevel:55,eggGroups:["Water 1","Dragon"]},
mewtwo:{num:150,species:"Mewtwo",types:["Psychic"],gender:"N",baseStats:{hp:106,atk:110,def:90,spa:154,spd:154,spe:130},abilities:{0:"Pressure"},heightm:2,weightkg:122,color:"Purple",eggGroups:["No Eggs"]},
mew:{num:151,species:"Mew",types:["Psychic"],gender:"N",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},abilities:{0:"Synchronize"},heightm:0.4,weightkg:4,color:"Pink"}
};
