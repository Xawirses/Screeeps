module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room
        if(creep.memory.mission != true && creep.ticksToLive < 5) {
            console.log("I need a new claimer on " + creep.memory.target);
            Game.spawns[creep.memory.home].memory.claimRoom = creep.memory.target;
            creep.memory.mission = true;
        }

        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        } else if (cl == OK) {
            creep.memory.mission = true;
        } else {
            // try to claim controller
            var cl = creep.claimController(creep.room.controller);

            if (cl == ERR_NOT_IN_RANGE) {
                // move towards the controller
                creep.moveTo(creep.room.controller);
            } else if (cl == ERR_GCL_NOT_ENOUGH) {
                var re = creep.reserveController(creep.room.controller);
                if(re == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
    }
};