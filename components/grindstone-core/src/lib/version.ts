let modVersion: string = "0.0.0";

/**
 * Set the mod's version.
 * @param version Version to set.
 * @returns The new mod version.
 */
export function setModVersion(version: string): string {
  return (modVersion = version);
}

/**
 * Get the mod version.
 * 
 * If you don't set the mod's version, it will return `0.0.0`.
 * @returns The mod's version.
 */
export function getModVersion(): string {
  return modVersion;
}
