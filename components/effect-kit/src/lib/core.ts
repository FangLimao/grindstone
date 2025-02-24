import { Entity, system } from "@minecraft/server";
import { GrindstoneError } from "@grindstone/core";

/**
 * 状态效果类型
 * @category Stable
 * @since 1.0.0
 */
export enum VirtualEffectType {
  /**
   * 正面效果
   */
  good,
  /**
   * 负面效果
   */
  bad,
  /**
   * 中性效果
   */
  neutral,
}

/**
 * 模拟一个可以添加到实体上的状态效果
 * @category Stable
 * @since 1.0.0
 */
export class VirtualEffect {
  /**
   * 当状态效果更新时的事件
   * @private
   */
  private updateEffect?: (entity: Entity, amplifier: number) => void;
  /**
   * 当状态效果添加到实体时的事件
   * @private
   */
  private addToEntityEffect?: (entity: Entity, amplifier: number) => void;
  /**
   * @param id 状态效果的 ID
   * @param updateTick 设置状态效果更新的间隔，推荐设置的大一些以避免游戏卡顿
   * @param type 状态效果的类型（正面、负面、中性）
   */
  constructor(
    readonly id: string,
    protected updateTick: number = 1,
    protected type?: VirtualEffectType
  ) {}
  /**
   * 向实体添加该状态效果
   * @param entity 要添加状态效果的实体
   * @param duration 效果持续时间，以刻为单位 *（20刻=1秒）*
   * @param amplifier 效果的等级（0为代表1级）
   * @return 本次添加操作是否成功
   */
  add(entity: Entity, duration: number, amplifier: number = 0): boolean {
    if (this.getRunnerId(entity)) return false;
    if (this.addToEntityEffect) {
      if (!entity.isValid()) return false;
      this.addToEntityEffect(entity, amplifier);
    }
    const runner = system.runInterval(() => {
      if (!this.updateEffect) return;
      if (!entity.isValid()) return;
      this.updateEffect(entity, amplifier);
    }, this.updateTick);
    entity.setDynamicProperty(this.id + ":runner", runner);
    entity.setDynamicProperty(this.id + ":amplifier", amplifier);
    system.runTimeout(() => {
      system.clearRun(runner);
      if (entity.isValid()) {
        entity.setDynamicProperty(this.id + ":runner", undefined);
        entity.setDynamicProperty(this.id + ":amplifier", undefined);
      }
    }, duration);
    return true;
  }
  /**
   * 向实体移除该状态效果
   * @param entity 要移除效果的实体
   * @return 本次移除操作是否成功
   * @throws 如果 Runner ID 数据类型不是 number 或 undefined，则抛出错误
   */
  remove(entity: Entity): boolean {
    if (!entity.isValid()) return false;
    if (!this.getRunnerId(entity)) return false;
    const runner = entity.getDynamicProperty(this.id + ":runner");
    if (typeof runner !== "number") return false;
    system.clearRun(runner);
    entity.setDynamicProperty(this.id + ":runner");
    return false;
  }
  /**
   * 当状态效果更新时，触发的事件
   * @param event
   */
  onUpdate(event: (entity: Entity, amplifier: number) => void): void {
    this.updateEffect = event;
  }
  /**
   * Set the event when entity's level have changed.
   * @param event
   */
  onAddToEntity(event: (entity: Entity, amplifier: number) => void) {
    this.addToEntityEffect = event;
  }
  /**
   * 获取该状态效果相关的的 SystemRunner ID
   * @return SystemRunner ID
   * @private
   */
  private getRunnerId(entity: Entity): number | undefined {
    const runner = entity.getDynamicProperty(this.id + ":runner");
    if (!runner) return undefined;
    if (typeof runner !== "number")
      throw new GrindstoneError(
        "Runner ID 数据类型无效，期望的数据类型：number，实际的数据类型：" +
          typeof runner
      );
    return runner;
  }
  /**
   * 获取该状态效果的等级
   * @return 实体的状态效果等级
   */
  getAmplifier(entity: Entity): number | undefined {
    const amp = entity.getDynamicProperty(this.id + ":amplifier");
    if (!amp) return undefined;
    if (typeof amp !== "number")
      throw new GrindstoneError(
        "Amplifier 数据类型无效，期望的数据类型：number，实际的数据类型：" +
          typeof amp
      );
    return amp;
  }
}

export class VirtualEffectManager {}
