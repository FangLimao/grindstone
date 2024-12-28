/**
 * Generate a random integer.
 * @param max The maximum value. Decimals will be parsed as integers.
 * @param min The minimum value. Decimals will be parsed as integers. Default value is 0.
 * @param inclusive Whether min and max are included.
 * @return A random integer between min and max.
 * @throws RangeError if max < min
 */
export function randomInteger(
  max: number,
  min: number = 0,
  inclusive: boolean = true
): number {
  max = Math.ceil(max);
  min = Math.ceil(min);
  if (max < min) {
    throw new RangeError(
      `randomInteger() is used incorrectly! Expect: any number higher than ${min}. Current: ${max}`
    );
  }
  if (inclusive) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

/**
 * Generate a random decimal.
 * @param max The maximum value. Decimals will be parsed as integers.
 * @param min The minimum value. Decimals will be parsed as integers, default value is 0.
 * @param fixed Reserved decimal digit, default value is 2.
 * @param inclusive Whether min and max are included.
 * @return A random decimal between min and max.
 * @throws RangeError if max < min
 */
export function randomDecimal(
  max: number,
  min: number = 0,
  fixed: number = 2,
  inclusive: boolean = true
): number {
  max = Math.ceil(max);
  min = Math.ceil(min);
  if (max < min) {
    throw new RangeError(
      `randomDecimal() is used incorrectly! Expect: any number higher than ${min}. Current: ${max}`
    );
  }
  let random: number;
  if (inclusive) {
    random = Math.random() * (max - min + 1) + min;
  } else {
    random = Math.random() * (max - min) + min;
  }
  if (fixed) {
    return Number(random.toFixed(fixed));
  } else {
    return random;
  }
}
