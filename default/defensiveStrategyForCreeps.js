const checkForEnemiesAndRespond = {

  /** @param {Creep} creep, serf, indentured servant **/
  run: function(creep) {
    const hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS);

    // in case we want to know this later
    Memory.war = false;
    let isWarrior = 0
    if (hostileCreeps.length) {
      Memory.war = true;

       // if warrior, do a thing
    if (isCapableOfAggression(creep)) { // todo: unsure what this role will be named. is it prudent to base this off role?
      creep.say('😡')
      creep.moveTo(hostileCreeps[0]);
      creep.attack(hostileCreeps[0]); // may only work for melee
      isWarrior = true
    } else {
      // if wienie, run away.
      creep.say('😱')
      const towers = creep.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
      //console.log(towers)
      if (towers.length) {
        creep.moveTo(towers[0]);
      } else {
        var spawns = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_SPAWN );
            }
        });
       // console.log(spawns)
        creep.moveTo(spawns[0]);
      }
       // assumes closest is '0'
      // What if at spawn and still being attacked?
    }

    }
    return {isWarrior, hostileCreeps}
    /* returning this so we can spawn warriors if none exist
        Game.spawns['Spawn1'].spawnCreep( [ATTACK, MOVE, MOVE], Game.time,  { memory: { role: 'warrior' } } );
    */
  }
};

/*
I think this is better than basing off roles,
  mainly so we don't have to remember to change this later.
  For Loop only hit once, then aggressive capability stored in memory
*/
function isCapableOfAggression(creep) {
  if (creep.memory.capableOfAggression === undefined) {
    for (i = 0; i < creep.body.length; i++) {
      if (creep.body[i].type === 'ATTACK' || creep.body[i].type === 'RANGED_ATTACK') {
        creep.memory.capableOfAggression = true;
      }
    }
    creep.memory.capableOfAggression = false;
  }
  return creep.memory.capableOfAggression
}

module.exports = checkForEnemiesAndRespond;
