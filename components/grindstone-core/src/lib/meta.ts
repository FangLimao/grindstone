/**
 * 模组元信息
 */
export let modData: ModMetaData = {
  id: "default",
  name: "Default Mod Name",
};

/**
 * 获取模组名称
 * @return 模组名称
 * @category Stable
 * @since 1.0.0
 */
export function getModName(): string {
  return modData.name;
}

/**
 * 获取模组ID
 * @return 模组ID
 * @category Stable
 * @since 1.0.0
 */
export function getModId(): string {
  return modData.id;
}

/**
 * 设置模组名称
 * @param name 新的模组名称
 * @category Stable
 * @since 1.0.0
 */
export function setModName(name: string): void {
  modData.name = name;
}

/**
 * 设置模组ID
 * @param id 新的模组ID
 * @category Stable
 * @since 1.0.0
 */
export function setModId(id: string): void {
  modData.id = id;
}

/**
 * 模组的元信息
 * @category Stable
 * @since 1.0.0
 */
export interface ModMetaData {
  /**
   * 模组ID
   */
  id: string;
  /**
   * 模组名称，默认是`minecraft`，**不支持本地化**
   */
  name: string;
}
