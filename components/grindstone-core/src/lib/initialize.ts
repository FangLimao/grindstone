import { world, WorldInitializeAfterEvent } from "@minecraft/server";
import { GrindstoneError } from "./error";
import { modData } from "./meta";

/**
 * 初始化模组
 * @param id 模组ID
 * @param name 模组名称
 * @param event 当脚本环境初始化时触发的事件
 * @throws 如果模组ID为`default`则会抛出错误
 * @category Stable
 * @since 1.0.0
 */
export function initializeMod(
  id: string,
  name: string,
  event?: (arg: WorldInitializeAfterEvent) => void
): void {
  if (id === "default") {
    throw new GrindstoneError("'Default' 不是一个合法的模组ID！");
  }
  modData.id = id;
  modData.name = name;
  if (event) {
    world.afterEvents.worldInitialize.subscribe((arg) => {
      event(arg);
    });
  }
}
