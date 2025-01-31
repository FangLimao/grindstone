import {
  Entity,
  EntityHitBlockAfterEvent,
  EntityHitEntityAfterEvent,
  GameMode,
  ItemDurabilityComponent,
  ItemStack,
  ItemUseAfterEvent,
  Player,
  PlayerBreakBlockAfterEvent,
  world,
} from "@minecraft/server";
import {
  consumeDurability,
  getEquipmentItem,
  setEquipmentItem,
} from "@grindstone/utils";

/**
 * 创建一个工具材料，这将为其自动监听耐久事件，并在一些特定种类的工具与方块交互时添加音效和动画
 *
 * 为一些特定种类的工具与方块交互时添加音效和动画的功能只有在添加了对应的标签后才可以正常使用（如`minecraft:is_axe`）
 * @example
 * new ToolMaterial("hy:custom_tools").addTrigger(
 *   ToolEventType.attack,
 *   (data: EntityHitBlockAfterEvent) => {
 *      data.damagingEntity.applyDamage(1);
 *  });
 *
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
   * 当工具的耐久值应当发生变化时，处理手持的物品
   * @param durability 应当消耗的耐久
   * @param item 手持的物品
   * @param entity 持有工具的实体
   * @param event 工具若损坏，触发的事件
   */
  protected disposeItem(
    durability: number,
    item: ItemStack,
    entity: Entity,
    event?: (eventData: ToolBreakAfterEvent) => void
  ): void {
    const newItem = consumeDurability(item, durability, entity);
    setEquipmentItem(entity, newItem);
    const component = newItem?.getComponent(
      "durability"
    ) as ItemDurabilityComponent;
    console.log(component.damage);
    if (!newItem && event) {
      event({
        itemStack: item,
        source: entity,
      });
    }
  }
  /**
   * 初始化该工具材料
   * @param tag 工具材料具有的标签
   */
  constructor(readonly tag: string) {
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
   * 添加工具材料监听器
   * @param type 监听器类型
   * @param trigger
   */
  addTrigger(
    type: ToolEventType,
    trigger: (
      data:
        | ToolBreakAfterEvent
        | ItemUseAfterEvent
        | PlayerBreakBlockAfterEvent
        | EntityHitEntityAfterEvent
    ) => void
  ) {
    switch (type) {
      case ToolEventType.attack:
        this.eventTriggers.attackAfterEvents = trigger;
        break;
      case ToolEventType.use:
        this.eventTriggers.useAfterEvents = trigger;
        break;
      case ToolEventType.breakBlock:
        this.eventTriggers.breakBlockAfterEvents = trigger;
        break;
      case ToolEventType.destroyed:
        this.eventTriggers.destroyedAfterEvents = trigger;
        break;
    }
  }
  /**
   * 当物品给原木剥皮时的事件
   */
  axeTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (ITEM.hasTag(this.tag) && ITEM.hasTag("minecraft:is_axe")) {
        if (!this.options?.closeUseDurabilityTrigger) {
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          this.disposeItem(1, ITEM, PLAYER, breakEvent);
        }
        PLAYER.playSound("use.wood");
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
        if (!this.options?.closeUseDurabilityTrigger) {
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          this.disposeItem(1, ITEM, PLAYER, breakEvent);
        }
        PLAYER.playSound("use.grass");
      }
    });
  }
  /**
   * 当物品锄地时的事件
   */
  hoeTrigger() {
    world.afterEvents.itemUseOn.subscribe((event) => {
      const [ITEM, PLAYER] = [event.itemStack, event.source];
      if (ITEM.hasTag(this.tag) && ITEM.hasTag("minecraft:is_shovel")) {
        if (!this.options?.closeUseDurabilityTrigger) {
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          this.disposeItem(1, ITEM, PLAYER, breakEvent);
        }
        PLAYER.playSound("step.gravel");
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
        if (
          PLAYER.getGameMode() === GameMode.survival ||
          PLAYER.getGameMode() === GameMode.adventure
        ) {
          const breakEvent = this.eventTriggers.destroyedAfterEvents;
          this.disposeItem(1, ITEM, PLAYER, breakEvent);
        }
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
  destroyedAfterEvents?: (eventData: ToolBreakAfterEvent) => void;
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

/**
 * 工具损坏后触发的事件
 */
export class ToolBreakAfterEvent {
  private constructor() {}
  /**
   * @remarks
   * 损坏的物品
   *
   */
  itemStack!: ItemStack;
  /**
   * @remarks
   * 引发事件的玩家
   *
   */
  readonly source!: Entity;
}
