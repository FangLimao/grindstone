import { world, WorldInitializeAfterEvent } from "@minecraft/server";
import { modData } from "./meta";

/**
 * Initialize the mod.
 * @param id Id of the mod.
 * @param name Name of the mod.
 * @param metaData Metadata of the mod.
 * @param event This event fires when the script environment is initialized on a world.
 */
export function initializeMod(
  id: string,
  name: string,
  event?: (arg: WorldInitializeAfterEvent) => void
): void {
  if (event) {
    modData.id = id;
    modData.name = name;
    world.afterEvents.worldInitialize.subscribe((arg) => {
      event(arg);
    });
  }
}
