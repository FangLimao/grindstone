/**
 * Metadata of the mod.
 */
export let modData: ModBaseData = {
  id: "ldk",
  name: "Lazuli Development Kit",
};

/**
 * Get the mod's name.
 * @return Name of the mod.
 */
export function getModName(): string {
  return modData.name;
}

/**
 * Get the mod's id.
 * @return Id of the mod.
 */
export function getModId(): string {
  return modData.id;
}

/**
 * Get the mod's name.
 * @param name New mod name.
 */
export function setModName(name: string): void {
  modData.name = name;
}

/**
 * Set the mod's id.
 * @param id New mod id.
 */
export function setModId(id: string): void {
  modData.id = id;
}

/**
 * Base data of the mod.
 */
export interface ModBaseData {
  /**
   * The mod id.
   */
  id: string;
  /**
   * Name of the mod, default is `Minecraft`
   *
   * i18n is not supported.
   */
  name: string;
}
