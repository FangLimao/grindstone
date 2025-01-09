import { DevkitError } from "@grindstone/common";
import { checkPercent, randomInteger } from "./math";
import { ascendingSort } from "./misc";

/**
 * Percentage-Driven random event trigger.
 * @param data The event and chance data.
 * @return A boolean of whether the event will be triggered.
 */
export function withPercentChance(data: PercentChanceData): boolean {
  if (!checkPercent(data.chance)) {
    throw new DevkitError("Passing in an illegal value:"+ data.chance)
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
 * Weight-Driven random event trigger.
 * @param data The event and weight data.
 * @return The Trigger result.
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
  const random =  Math.floor(Math.random() * sum);
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
  throw new Error("Could not find matched data.");
}

/**
 * The event and weight data for {@link withWeightChance}.
 */
export interface WeightChanceData {
  /**
   * The weight to trigger the event.
   */
  weight: number;
  /**
   * The event.
   */
  event?: () => void;
}

/**
 * The event and chance data for {@link withPercentChance}.
 */
export interface PercentChanceData {
  /**
   * The trigger probability, should be a percentage (0~1).
   */
  chance: number;
  /**
   * The event.
   */
  event?: () => void;
}

/**
 * The Trigger result for {@link withWeightChance}.
 */
export interface WeightChanceResult {
  /**
   * Sum of weights.
   */
  weightSum: number;
  /**
   * Random generated weight random number
   */
  weightRand: number;
  /**
   * Index of Triggered data.
   */
  dataIndex: number;
}
