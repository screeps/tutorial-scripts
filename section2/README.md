Console Commands in Tutorial
---
Spawn a new creep named `Upgrader1`.

```
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Upgrader1');
```

Differentiate the creeps by storing values in memory using a key named `role`.
```
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';
```