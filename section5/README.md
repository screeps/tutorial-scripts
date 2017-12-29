Console Commands in Tutorial
---
Activate safe mode via the controller in the room which contains `Spawn1`.

```
Game.spawns['Spawn1'].room.controller.activateSafeMode();
```

Place a tower structure at coordinates `(23,22)`.
```
Game.spawns['Spawn1'].room.createConstructionSite(23, 22, STRUCTURE_TOWER);
```