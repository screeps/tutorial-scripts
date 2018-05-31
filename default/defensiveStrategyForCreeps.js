// NOT used yet, not sure if it actually is helpful to draw a circle around the army.
whereAreHostiles(creep, hostileCreeps) {
  let x = 0
  let y = 0
  let small = 51 // larger than room
  let large = -1
  hostileCreeps.forEach((badGuy) => {
    if (!creep.memory.attackedBy) creep.memory.attackedBy = []
    creep.memory.attackedBy.push(badguy.owner) // metrics are important
    x += badguy.pos.x
    y += badguy.pos.y
    if(badguy.pos.x < small  ) small = badguy.pos.x
    if(badguy.pos.y < small  ) small = badguy.pos.y
    if(badguy.pos.x < large  ) large = badguy.pos.x
    if(badguy.pos.y < large  ) large = badguy.pos.y
  })

   const averageX = Math.round(x/hostileCreeps.length);
   const averageY = Math.round(y/hostileCreeps.length);
   const spread = large - small;

   return ({x: averageX, y: averagey, spread})
  //return an "area", maybe average or
}

const checkForEnemiesAndRespond = {

  /** @param {Creep} creep, serf, indentured servant **/
  run: function(creep) {
    const hostileCreeps = creep.room.find(Game.HOSTILE_CREEPS);

    // in case we want to know this later
    creep.memory.war = false;
    if (hostileCreeps.length) {
      creep.memory.war = true;
    }

    // if warrior, do a thing
    if (isCapableOfAggression(creep)) { // todo: unsure what this role will be named. is it prudent to base this off role?
      creep.say('😡')
      creep.moveTo(hostileCreeps[0]);
      creep.attack(hostileCreeps[0]); // may only work for melee
    } else {
      // if wienie, run away.
      
      // where are hostile creeps? move in response
      // how do we want harvesters to respond if in another room than where spawn is?
      // go back to spawn?   Game.spawns[0]
      creepmoveTo(Game.spawns[0]) // assumes closest is '0'
      // What if at spawn and still being attacked?
    }
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
