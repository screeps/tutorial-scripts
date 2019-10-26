Console Commands in Tutorial
---
Spawn a new creep named `Builder1` and store the role in memory as `builder`.

```
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder' } });
```

Spawn a new creep named `HarvesterBig` with the role `harvester`.
```
Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } });
```