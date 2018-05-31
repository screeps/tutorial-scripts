var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#fff'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
            if(targets.length > 0) {
                if(!creep.memory.harvestIndex){
                    creep.memory.harvestIndex = getRandomInt(targets.length -1)
                }
                if(creep.transfer(targets[creep.memory.harvestIndex], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[creep.memory.harvestIndex], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = roleHarvester;
