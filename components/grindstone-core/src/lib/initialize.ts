import { world, WorldInitializeAfterEvent } from "@minecraft/server";
import { modData } from "./meta";

/**
 * Initialize the mod.
 * @param id Id of the mod.
 * @param name Name of the mod.
 * @param event This event fires when the script environment is initialized on a world.
 * @throws Error if mod id is `default`.
 */
export function initializeMod(
  id: string,
  name: string,
  event?: (arg: WorldInitializeAfterEvent) => void
): void {
  if (id === "default") {
    throw new Error("'Default' is an invaild mod id!");
  }
  modData.id = id;
  modData.name = name;
  if (event) {
    world.afterEvents.worldInitialize.subscribe((arg) => {
      event(arg);
    });
  }
}
