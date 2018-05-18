StructureTower.prototype.defend =
    function () {

        // Defend Base
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (target != undefined) {
            this.attack(target);
        }

        // Repair structure & only first 100k of wall
        var closestDamagedStructure = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax && (structure.structureType != STRUCTURE_WALL || structure.hits < 100000)
        });
        
        if(closestDamagedStructure) {
            this.repair(closestDamagedStructure);
        }
    };