import {
  EntityHitEntityAfterEvent,
  GameMode,
  ItemUseAfterEvent,
  PlayerBreakBlockAfterEvent,
  world,
} from "@minecraft/server";
import { getEquipmentItem } from "@grindstone/utils";
import { disposeItem, ItemBreakAfterEvent } from "./common";

/**
 * 创建一个工具材料，这将为其自动监听耐久事件，并在一些特定种类的工具与方块交互时添加音效和动画
 *
 * 为一些特定种类的工具与方块交互时添加音效和动画的功能只有在添加了对应的标签后才可以正常使用（如`minecraft:is_axe`）
 * @example
 * const tool = new ToolMaterial("hy:custom_tools", true);
 * tool.onHitEntity((callback)=>{
 *  console.log("击中实体！")
 * })
 * @since GDK v0.16.0
 * @since Material Kit v0.1.0
 */
export class ToolMaterial {
  /**
   * 工具材料的相关设置
   */
  protected options: ToolMaterialOptions = {
    closeDurabilityTrigger: false,
    closeUseDurabilityTrigger: false,
  };
  /**
   * 工具材料的相关监听器
   */
  protected eventTriggers: ToolEventTrigger = {};
  /**
   * 初始化该工具材料
   * @param tag 工具材料具有的标签
   * @param debug 是否开启调试模式，若开启，则在一些情况下会发送日志以方便调试
   */
  constructor(
    readonly tag: string,
    public debug: boolean = false
  ) {
    this.axeTrigger();
    this.shovelTrigger();
    this.hoeTrigger();
    this.digTrigger();
    this.otherTrigger();
  }
  /**
   * 修改该工具材料的相关设置
   * @param option
   * @return 新的工具材料设置
   */
  setOptions(options: ToolMaterialOptions): ToolMaterialOptions {
    return (this.options = options);
  }
  /**
   * 当工具材料对应的工具损坏时触发的事件监听器
   * @param callback
   */
  onToolBreak(callback: (data: ItemBreakAfterEvent) => void) {
    this.eventTriggers.destroyedAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具使用时触发的事件监听器
   * @param callback
   */
  onToolUse(callback: (data: ItemUseAfterEvent) => void) {
    this.eventTriggers.useAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具挖掘方块时触发的事件监听器
   * @param callback
   */
  onToolBreakBlock(callback: (data: PlayerBreakBlockAfterEvent) => void) {
    this.eventTriggers.breakBlockAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具击打实体时触发的事件监听器
   * @param callback
   */
  onHitEntity(callback: (data: EntityHitEntityAfterEvent) => void) {
    this.eventTriggers.attackAfterEvents = callback;
  }
  /**
   * 当物品给原木剥皮时的事件
   */
  axeTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (ITEM.hasTag(this.tag) && ITEM.hasTag("minecraft:is_axe")) {
        PLAYER.playSound("use.wood");
        if (!this.options?.closeUseDurabilityTrigger) {
          if (PLAYER.getGameMode() === GameMode.creative) return;
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          disposeItem(1, ITEM, PLAYER, breakEvent, this.debug);
        }
      }
    });
  }
  /**
   * 当物品将方块转换为土径时的事件
   */
  shovelTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (ITEM.hasTag(this.tag) && ITEM.hasTag("minecraft:is_shovel")) {
        PLAYER.playSound("use.grass");
        if (!this.options?.closeUseDurabilityTrigger) {
          if (PLAYER.getGameMode() === GameMode.creative) return;
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          disposeItem(1, ITEM, PLAYER, breakEvent, this.debug);
        }
      }
    });
  }
  /**
   * 当物品锄地时的事件
   */
  hoeTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (ITEM.hasTag(this.tag) && ITEM.hasTag("minecraft:is_hoe")) {
        PLAYER.playSound("step.gravel");
        if (!this.options?.closeUseDurabilityTrigger) {
          if (PLAYER.getGameMode() === GameMode.creative) return;
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          disposeItem(1, ITEM, PLAYER, breakEvent, this.debug);
        }
      }
    });
  }
  /**
   * 当工具挖掘方块时的事件
   */
  digTrigger() {
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      const [PLAYER, ITEM] = [event.player, getEquipmentItem(event.player)];
      if (!ITEM) return;
      if (ITEM.hasTag(this.tag)) {
        if (this.eventTriggers.breakBlockAfterEvents)
          this.eventTriggers.breakBlockAfterEvents(event);
        if (this.options?.closeDurabilityTrigger) return;
        if (PLAYER.getGameMode() === GameMode.creative) return;
        const breakEvent = this.eventTriggers.destroyedAfterEvents;
        disposeItem(1, ITEM, PLAYER, breakEvent, this.debug);
      }
    });
  }
  /**
   * 其他事件监听器
   */
  otherTrigger() {
    world.afterEvents.entityHitEntity.subscribe((arg) => {
      if (!getEquipmentItem(arg.damagingEntity)) return;
      if (getEquipmentItem(arg.damagingEntity)?.hasTag(this.tag)) {
        if (this.eventTriggers.attackAfterEvents)
          this.eventTriggers.attackAfterEvents(arg);
      }
    });
    world.afterEvents.itemUse.subscribe((arg) => {
      if (!getEquipmentItem(arg.source)) return;
      if (getEquipmentItem(arg.source)?.hasTag(this.tag)) {
        if (this.eventTriggers.useAfterEvents)
          this.eventTriggers.useAfterEvents(arg);
      }
    });
  }
}

/**
 * 工具材料的相关设置
 */
export interface ToolMaterialOptions {
  /**
   * 关闭耐久监听器
   */
  closeDurabilityTrigger?: boolean;
  /**
   * 关闭使用时耐久监听器
   */
  closeUseDurabilityTrigger?: boolean;
}

/**
 * 工具材料的事件监听器
 */
export interface ToolEventTrigger {
  /**
   * 工具耐久耗尽后触发的事件
   */
  destroyedAfterEvents?: (eventData: ItemBreakAfterEvent) => void;
  /**
   * 工具使用后触发的事件
   * @param eventData 事件数据
   */
  useAfterEvents?: (eventData: ItemUseAfterEvent) => void;
  /**
   * 工具破坏方块后触发的事件
   * @param eventData 事件数据
   */
  breakBlockAfterEvents?: (eventData: PlayerBreakBlockAfterEvent) => void;
  /**
   * 工具攻击生物后触发的事件
   * @param eventData 事件数据
   */
  attackAfterEvents?: (eventData: EntityHitEntityAfterEvent) => void;
}

/**
 * 工具事件类型
 */
export enum ToolEventType {
  destroyed = "destroyed",
  use = "use",
  breakBlock = "breakBlock",
  attack = "attack",
}
