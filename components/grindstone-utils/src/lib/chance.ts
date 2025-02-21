import { GrindstoneError } from "@grindstone/core";
import { checkPercent, randomInteger } from "./math";
import { ascendingSort } from "./misc";

/**
 * 基于百分数随机事件触发器
 * @param data 事件和触发概率
 * @return 一个表示事件是否被触发的布尔值
 * @category Stable
 * @since 1.0.0
 */
export function withPercentChance(data: PercentChanceData): boolean {
  if (!checkPercent(data.chance)) {
    throw new GrindstoneError("给定的概率值应当在[0, 1]之间：]，实际给定的值：" + data.chance);
  }
  if (randomInteger(100, 1) <= data.chance * 100) {
    if (data.event) {
      data.event();
    }
    return true;
  } else {
    return false;
  }
}

/**
 * 给予权重的随机事件触发器
 * @param data 事件和触发权重
 * @return 触发结果
 * @category Stable
 * @since 1.0.0
 */
export function withWeightChance(data: WeightChanceData[]): WeightChanceResult {
  let weights: number[] = [];
  data.forEach((data) => {
    weights.push(data.weight);
  });
  ascendingSort(weights);
  const cumulativeWeights: number[] = [];
  let sum: number = 0;
  for (const weight of weights) {
    sum += weight;
    cumulativeWeights.push(sum);
  }
  const random = Math.floor(Math.random() * sum);
  for (let i = 0; i < cumulativeWeights.length; i++) {
    if (random < cumulativeWeights[i]) {
      if (data[i]?.event) {
        data[i]?.event!();
      }
      return {
        weightSum: sum,
        weightRand: random,
        dataIndex: i,
      };
    }
  }
  throw new GrindstoneError("无法匹配触发事件！");
}

/**
 * {@link withWeightChance} 的权重和事件数据
 * @category Stable
 * @since 1.0.0
 */
export interface WeightChanceData {
  /**
   * 触发该事件的权重
   */
  weight: number;
  /**
   * 要触发的事件
   */
  event?: () => void;
}

/**
 * {@link withPercentChance} 的概率和事件数据
 * @category Stable
 * @since 1.0.0
 */
export interface PercentChanceData {
  /**
   * 触发该事件的概率，应该是一个百分数(0~1).
   */
  chance: number;
  /**
   * 要触发的事件
   */
  event?: () => void;
}

/**
 * {@link withWeightChance} 的触发结果
 * @category Stable
 * @since 1.0.0
 */
export interface WeightChanceResult {
  /**
   * 权重之和
   */
  weightSum: number;
  /**
   * 生成的随机数
   */
  weightRand: number;
  /**
   * 被触发的事件索引
   */
  dataIndex: number;
}
