let modVersion: string = "0.0.0";

/**
 * 设置模组版本
 * @param version 将要设置的版本
 * @returns 新的模组版本
 * @category Stable
 * @since 1.0.0
 */
export function setModVersion(version: string): string {
  return (modVersion = version);
}

/**
 * 获取模组版本，若没有设置，则返回 `0.0.0`
 * @returns 当前模组版本
 * @category Stable
 * @since 1.0.0
 */
export function getModVersion(): string {
  return modVersion;
}
