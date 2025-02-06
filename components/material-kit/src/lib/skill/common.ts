import { Entity, Player, RawMessage } from "@minecraft/server";

/**
 * 抽象的技能类，技能应当有一个「载体」，如武器材料等
 * @since GDK v0.16.2
 * @since v0.3.0
 */
export abstract class Skill {
  /**
   * 释放技能时显示在玩家行动栏的提示
   */
  protected actionBarTips?: (RawMessage | string)[] | RawMessage | string;
  /**
   * 技能释放时的事件
   */
  protected callBack?: (data: SkillOnReleaseAfterEvent) => void;
  /**
   * 技能可以释放的条件
   */
  protected condition?: (data: SkillOnReleaseAfterEvent) => boolean;
  /**
   * @param weight 若多个技能同时可释放，该技能被选中释放的概率
   * @param ignoreOtherSkills 若多个技能同时可释放，是否忽略其他技能直接释放
   */
  constructor(
    public weight: number,
    public ignoreOtherSkills: boolean = false
  ) {}
  /**
   * 获取该技能的类型
   * @return 一个包含技能类型的字符串
   */
  abstract getSkillType(): string;
  /**
   * 释放该技能
   * @param releaser 释放技能的生物
   * @param targets 受到技能影响的生物，在部分类型的技能中可能为`undefined`
   */
  release(releaser: Entity, target?: Entity): void {
    if (this.condition) {
      if (
        !this.condition({
          releaser: releaser,
          target: target,
        })
      ) {
        return;
      }
    }
    if (this.actionBarTips && releaser instanceof Player) {
      releaser.onScreenDisplay.setActionBar(this.actionBarTips);
    }
    if (this.callBack) {
      this.callBack({
        releaser: releaser,
        target: target,
      });
    }
  }
  /**
   * 设置该技能的提示文本
   * @param tips
   */
  setTips(tips: (RawMessage | string)[] | RawMessage | string) {
    this.actionBarTips = tips;
  }
  setCondition(condition: (data: SkillOnReleaseAfterEvent) => boolean) {
    this.condition = condition;
  }
  /**
   * 设置该技能释放时的事件
   * @param callback 释放后的事件回调
   */
  onReleased(callback: (data: SkillOnReleaseAfterEvent) => void) {
    this.callBack = callback;
  }
}

/**
 * 技能释放后的事件数据
 */
export class SkillOnReleaseAfterEvent {
  /**
   * 释放技能的生物
   */
  releaser: Entity;
  /**
   * 受到技能影响的生物，在部分类型的技能中可能为`undefined`
   */
  target?: Entity;
}
