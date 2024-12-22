import { Dimension, Vector3 } from "@minecraft/server";

export type LootToolType = string | "mainhand" | "offhand";

/**
 * Drops the given loot table into the dimension.
 * @param dimension The dimension to drop loot.
 * @param location Location to drop loot.
 * @param path Path to loot table.
 * @param toolType Specifies a tool to be used to simulatively kill or loot.
 */
export function loot(
  dimension: Dimension,
  location: Vector3,
  path: string,
  toolType?: LootToolType
): void {
  if (toolType) {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}" "${toolType}"`
    );
  } else {
    dimension.runCommand(
      `loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`
    );
  }
}

/**
 * Distributes given loot table to a container block.
 * @param dimension The dimension to drop loot.
 * @param blockLocation Location to the container block.
 * @param path Path to loot table.
 * @param toolType Specifies a tool to be used to simulatively kill or loot.
 */
export function insertLoot(
  dimension: Dimension,
  blockLocation: Vector3,
  path: string,
  toolType?: LootToolType
): void {
  if (toolType) {
    dimension.runCommand(
      `loot insert ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} loot "${path}" "${toolType}"`
    );
  } else {
    dimension.runCommand(
      `loot insert ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} loot "${path}"`
    );
  }
}
