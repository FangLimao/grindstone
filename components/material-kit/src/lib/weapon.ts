import {
  world,
  PlayerBreakBlockAfterEvent,
  GameMode,
} from "@minecraft/server";
import {
  getEquipmentItem,
  WeightChanceData,
  withWeightChance,
} from "@grindstone/utils";
import { WeaponAtkSkill, WeaponUseSkill } from "./skill/weapon";
import { disposeItem, ItemBreakAfterEvent } from "./common";

/**
 * 创建一个武器材料，这将为其自动监听耐久事件，同时也可以为其添加武器技能
 *
 * *如果想监听该武器的使用和击打事件，请为其添加使用/攻击技能*
 * 
 * @since GDK v0.16.4
 * @since v0.4.0
 */
export class WeaponMaterial {
  protected skills?: (WeaponAtkSkill | WeaponUseSkill)[] = [];
  /**
   * 工具材料的相关监听器
   */
  protected eventTriggers: WeaponEventTrigger = {};
  options: WeaponMaterialOptions = {};
  /**
   * 初始化该武器材料
   * @param tag 武器材料具有的标签
   * @param debug 是否开启调试模式，若开启，则在一些情况下会发送日志以方便调试
   */
  constructor(
    readonly tag: string,
    public debug: boolean = false
  ) {
    this.digTrigger();
    this.useTrigger();
    this.hitTrigger();
  }
  /**
   * 向武器材料添加技能
   * @param skills
   */
  addSkill(...skills: (WeaponAtkSkill | WeaponUseSkill)[]) {
    skills.forEach(skill=>{
      this.skills?.push(skill);
    })
  }
  /**
   * 设置该武器材料的选项
   * @param option 
   */
  setOption(option: WeaponMaterialOptions){
    this.options = option;
  }
  /**
   * 获取该武器材料所有技能
   * @returns
   */
  getAllSkills(): (WeaponAtkSkill | WeaponUseSkill)[] | undefined {
    return this.skills;
  }
  /**
   * 获取该武器材料的攻击技能
   * @returns
   */
  getAtkSkills(): WeaponAtkSkill[] {
    let arr = this.getAllSkills();
    if (!arr) return [];
    let atkSkills: WeaponAtkSkill[] = [];
    arr.forEach((skill) => {
      if (skill.getSkillType() === "attack") atkSkills.push(skill);
    });
    return atkSkills;
  }
  /**
   * 获取该武器材料的使用技能
   * @returns
   */
  getUseSkills(): WeaponUseSkill[] {
    let arr = this.getAllSkills();
    if (!arr) return [];
    let useSkills: WeaponAtkSkill[] = [];
    arr.forEach((skill) => {
      if (skill.getSkillType() === "use") useSkills.push(skill);
    });
    return useSkills;
  }
  /**
   * 当工具材料对应的工具损坏时触发的事件监听器
   * @param callback
   */
  onWeaponBreak(callback: (data: ItemBreakAfterEvent) => void) {
    this.eventTriggers.destroyedAfterEvents = callback;
  }
  /**
   * 当工具材料对应的工具挖掘方块时触发的事件监听器
   * @param callback
   */
  onToolBreakBlock(callback: (data: PlayerBreakBlockAfterEvent) => void) {
    this.eventTriggers.breakBlockAfterEvents = callback;
  }
  /**
   * 当武器挖掘方块时的事件
   */
  protected digTrigger() {
    world.afterEvents.playerBreakBlock.subscribe((event) => {
      const [PLAYER, ITEM] = [event.player, getEquipmentItem(event.player)];
      if (!ITEM) return;
      if (ITEM.hasTag(this.tag)) {
        if (this.eventTriggers.breakBlockAfterEvents)
          this.eventTriggers.breakBlockAfterEvents(event);
        if (this.options?.closeDurabilityTrigger) return;
        if (PLAYER.getGameMode() === GameMode.creative) return;
        const breakEvent = this.eventTriggers.destroyedAfterEvents;
        disposeItem(2, ITEM, PLAYER, breakEvent, this.debug);
      }
    });
  }
  /**
   * 当武器使用时的事件
   */
  protected useTrigger() {
    world.afterEvents.itemUse.subscribe((event) => {
      const [player, item] = [event.source, event.itemStack];
      if (!item.hasTag(this.tag)) return;
      if (this.getUseSkills().length === 0) return;
      const chanceData: WeightChanceData[] = [];
      this.getUseSkills().forEach((skill) => {
        if (skill.ignoreOtherSkills) {
          skill.release(event.source);
          return;
        }
        chanceData.push({
          event: () => {
            skill.release(player);
          },
          weight: skill.weight,
        });
      });
      let result = withWeightChance(chanceData);
      if(this.debug)console.log(
        `选中权重: ${result.dataIndex}; 权重之和:${result.weightSum}; 权重随机数: ${result.weightRand}`
      );
    });
  }
  /**
   * 当武器击中实体时的事件
   */
  protected hitTrigger() {
    world.afterEvents.entityHitEntity.subscribe((event) => {   
      const [atker, target, item] = [
        event.damagingEntity,
        event.hitEntity,
        getEquipmentItem(event.damagingEntity),
      ];
      if (!item) return;
      if (!item.hasTag(this.tag)) return;
      if (this.getAtkSkills().length === 0) return;
      const chanceData: WeightChanceData[] = [];
      this.getAtkSkills().forEach((skill) => {
        if (skill.ignoreOtherSkills) {
          skill.release(atker, target);
          return;
        }
        chanceData.push({
          event: () => {
            skill.release(atker, target);
          },
          weight: skill.weight,
        });
      });
      let result = withWeightChance(chanceData);
      if(this.debug) console.log(
        `选中权重: ${result.dataIndex}; 权重之和:${result.weightSum}; 权重随机数: ${result.weightRand}`
      );
    });
  }
}

/**
 * 武器材料材料的事件监听器
 *
 * *如果想监听该武器的使用和击打事件，请为其添加使用/攻击技能*
 */
export interface WeaponEventTrigger {
  /**
   * 武器耐久耗尽后触发的事件
   */
  destroyedAfterEvents?: (eventData: ItemBreakAfterEvent) => void;
  /**
   * 武器破坏方块后触发的事件
   * @param eventData 事件数据
   */
  breakBlockAfterEvents?: (eventData: PlayerBreakBlockAfterEvent) => void;
}

/**
 * 武器材料的相关设置
 */
export interface WeaponMaterialOptions {
  /**
   * 关闭耐久监听器
   */
  closeDurabilityTrigger?: boolean;
  /**
   * 关闭使用时耐久监听器
   */
  closeUseDurabilityTrigger?: boolean;
}
