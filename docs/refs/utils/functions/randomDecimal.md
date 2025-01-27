[**@grindstone/utils v0.7.2**](../README.md)

***

[@grindstone/utils](../globals.md) / randomDecimal

# Function: randomDecimal()

> **randomDecimal**(`max`, `min`, `fixed`, `inclusive`): `number`

Defined in: math.ts:37

Generate a random decimal.

## Parameters

### max

`number`

The maximum value. Decimals will be parsed as integers.

### min

`number` = `0`

The minimum value. Decimals will be parsed as integers, default value is 0.

### fixed

`number` = `2`

Reserved decimal digit, default value is 2.

### inclusive

`boolean` = `true`

Whether min and max are included.

## Returns

`number`

A random decimal between min and max.

## Throws

RangeError if max < min
