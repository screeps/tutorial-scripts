var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(!creep.memory.harvestIndex){
                creep.memory.harvestIndex = getRandomInt(sources.length -1)
            }

            if(creep.harvest(sources[creep.memory.harvestIndex]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.harvestIndex], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
module.exports = roleBuilder;
