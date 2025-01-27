[**@grindstone/utils v0.7.2**](../README.md)

***

[@grindstone/utils](../globals.md) / randomInteger

# Function: randomInteger()

> **randomInteger**(`max`, `min`, `inclusive`): `number`

Defined in: math.ts:9

Generate a random integer.

## Parameters

### max

`number`

The maximum value. Decimals will be parsed as integers.

### min

`number` = `0`

The minimum value. Decimals will be parsed as integers. Default value is 0.

### inclusive

`boolean` = `true`

Whether min and max are included.

## Returns

`number`

A random integer between min and max.

## Throws

RangeError if max < min
