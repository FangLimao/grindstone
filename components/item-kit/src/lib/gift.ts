import { ItemStack, Player, world } from "@minecraft/server";
import {
  withPercentChance,
  withWeightChance,
  WeightChanceData,
  setEquipmentItem,
} from "@grindstone/utils";
import { GiftUtils } from "../utils";

/**
 * Define a gift item.
 */
export class GiftItemBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param reward Rewards of the gift.
   * @param sound Plays a sound when player receive the reward.
   */
  constructor(
    readonly typeId: string,
    public reward: RewardType,
    public sound?: string,
  ) {}
  /**
   * Build the gift.
   */
   build(): void {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === this.typeId) {
        setEquipmentItem(event.source);
        this.giveReward(event.source);
      }
    });
  }
  /**
   * Give reward to a player.
   * @param player
   */
  giveReward(player: Player): void {
    GiftUtils.giveReward(player, this.reward, this.sound);
  }
}

/**
 * A Percent-Driven random reward gift.
 */
export class PercentGiftItemBuilder extends GiftItemBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param chance The probability of give reward when use the gift, should be a percentage (0~1).
   * @param reward Rewards of the gift.
   * @param sound Plays a sound when player receive the reward.
   */
  constructor(
    readonly typeId: string,
    public chance: number,
    public reward: RewardType,
    public sound?: string,
  ) {
    super(typeId, reward, sound);
  }
  /**
   * Give reward to a player.
   * @param player
   */
  giveReward(player: Player): void {
    withPercentChance({
      chance: this.chance,
      event: () => {
        GiftUtils.giveReward(player, this.reward, this.sound);
      },
    });
  }
}

/**
 * A Weight-Driven random reward gift.
 */
export class WeightGiftItemBuilder {
  /**
   * @param typeId Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.
   * @param data Data of the gift, including its reward and weight.
   * @param sound Plays a sound when player receive the reward.
   */
  constructor(
    readonly typeId: string,
    public data: RewardWeightData[],
    public sound?: string,
  ) {}
  /**
   * Build the gift.
   */
  build(): void {
    world.afterEvents.itemUse.subscribe((event) => {
      if (event.itemStack.typeId === this.typeId) {
        setEquipmentItem(event.source);
        this.giveReward(event.source);
      }
    });
  }
  /**
   * Give reward to a player.
   * @param player
   */
  giveReward(player: Player): void {
    let chanceData: WeightChanceData[] = [];
    this.data.forEach((data) => {
      chanceData.push({
        weight: data.weight,
        event: () => {
          GiftUtils.giveReward(player, data.reward, this.sound);
        },
      });
    });
    withWeightChance(chanceData);
  }
}

/**
 * Types of gift reward.
 */
export interface RewardType {
  /**
   * Player will get these items when the quest is finished.
   */
  items?: ItemStack[];
  /**
   * The specific level will be given to the player.
   */
  level?: number;
  /**
   * The specific point will be given to the player.
   */
  exp?: number;
}

/**
 * Data of the gift, including its reward and weight.
 */
export interface RewardWeightData {
  /**
   * Reward of the gift.
   */
  reward: RewardType;
  /**
   * Weight of giving this reward.
   */
  weight: number;
}
