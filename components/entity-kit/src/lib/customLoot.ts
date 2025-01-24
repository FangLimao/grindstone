import { world } from "@minecraft/server";
import { loot } from "@grindstone/utils";

/**
 * Add a custom loot table to an entity.
 * @example 
 * new CustomEntityLoot("minecraft:allay", "entity/allay")
 */
export class CustomEntityLoot {
  /**
   * @param typeId Identifier of the type of the entity - for example, 'minecraft:skeleton'.
   * @param lootPath Path to loot table.
   */
  constructor(
    readonly typeId: string,
    public lootPath: string
  ) {
    world.afterEvents.entityDie.subscribe((arg) => {
      if (arg.deadEntity.typeId === this.typeId) {
        const entity = arg.deadEntity;
        loot(entity.dimension, entity.location, this.lootPath);
      }
    });
  }
}
