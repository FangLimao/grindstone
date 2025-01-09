/*
 * Copyright © 2024 CTN Studios Contributors
 * This file is licensed under MIT license
 */

import { ItemStack, Player } from "@minecraft/server";
import {
  giveItem,
  withPercentChance,
  withWeightChance,
  WeightChanceData,
} from "@grindstone/utils";

/**
 * Some useful functions for Gift Api.
 * @category Utils
 */
export class GiftUtils {
  /**
   * Give reward to a player.
   * @param player
   * @param giftReward
   * @param sound Plays a sound when player receive the reward.
   */
  static giveReward(player: Player, giftReward: RewardType, sound?: string) {
    if (giftReward.items) {
      const ITEMS = giftReward.items;
      ITEMS.forEach((item) => {
        giveItem(player, item);
      });
    }
    if (giftReward.exp) {
      player.addExperience(giftReward.exp);
    }
    if (giftReward.level) {
      player.addExperience(giftReward.level);
    }
    player.playSound(sound ?? "random.levelup");
  }
}

/**
 * Define a gift item.
 * @category Need Registry
 */
export class GiftItem {
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
   * Registry the gift.
   * @deprecated Use `Register.giftRegistry()` to registry the gift.
   */
  protected register(): void {
    console.warn("[Lazuli] The register method was deprecated!");
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
 * @category Need Registry
 */
export class PercentGiftItem extends GiftItem {
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
 * @category Need Registry
 */
export class WeightGiftItem {
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
   * Registry the gift.
   * @deprecated Use `Register.giftRegistry()` to registry the gift.
   */
  protected register(): void {
    console.warn("[Lazuli] The register method was deprecated!");
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
