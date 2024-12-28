import { system } from "@minecraft/server";

/**
 * Generate a UUID.
 * @return a UUID
 */
export function generateUUID(): string {
  const currentTimestamp: number = system.currentTick;
  return "xxxxxxxx-xxxx-4xxx-yxxx-zxxxxxxx".replace(
    /[xyz]/g,
    (args: string) => {
      const random: number = (Math.random() * 16) | 0;
      const value: number = args == "x" ? random : (random & 0x3) | 0x8;
      if (args === "z")
        return value.toString(16) + currentTimestamp.toString(16).slice(-4);
      else return value.toString(16);
    },
  );
}

/**
 * Ensure that namespace is present.
 * @param str
 */
export function ensureNamespace(str: string): string {
  return str.includes(":") ? str : "minecraft:" + str;
}

/**
 * Sort an number array in ascending order.
 * @param arr The array to sort.
 */
export function ascendingSort(arr: Array<number>): void{
  arr.sort(function (a, b) {
    return a - b;
  });
}

/**
 * Sort an number array in descending order.
 * @param arr The array to sort.
 */
export function descendingSort (arr: Array<number>): void{
  arr.sort(function (a, b) {
    return b - a;
  });
}

/**
 * Generate a random integer.
 * @param max The maximum value (inclusive). Decimals will be parsed as integers.
 * @param min The minimum value (inclusive). Decimals will be parsed as integers. Default value is 0.
 * @return A random integer between min and max (inclusive).
 * @throws RangeError if max < min
 */
export function randomInteger(max: number, min: number = 0): number {
  // Parse inputs as integers
  max = Math.ceil(max);
  min = Math.ceil(min);
  // Validate the range
  if (max < min) {
    throw new RangeError(
      `randomInteger() is used incorrectly! Expect: any number higher than ${min}. Current: ${max}`,
    );
  }
  // Generate a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}