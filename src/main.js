// import modules
require('prototype.creep');
require('prototype.tower');
require('prototype.spawn');

module.exports.loop = function() {
    // Memory cleanup
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }

    // Creeps tasks
    for (let name in Game.creeps) {
        Game.creeps[name].runRole();
    }

    // Tower Action
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    for (let tower of towers) {
        tower.defend();
    }

    // Colony Action
    for (let spawnName in Game.spawns) {
        Game.spawns[spawnName].spawnCreepsIfNecessary();
    }
};