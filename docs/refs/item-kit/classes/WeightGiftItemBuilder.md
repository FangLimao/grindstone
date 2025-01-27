[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / WeightGiftItemBuilder

# Class: WeightGiftItemBuilder

Defined in: lib/gift.ts:79

A Weight-Driven random reward gift.

## Constructors

### new WeightGiftItemBuilder()

> **new WeightGiftItemBuilder**(`typeId`, `data`, `sound`?): [`WeightGiftItemBuilder`](WeightGiftItemBuilder.md)

Defined in: lib/gift.ts:85

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### data

[`RewardWeightData`](../interfaces/RewardWeightData.md)[]

Data of the gift, including its reward and weight.

##### sound?

`string`

Plays a sound when player receive the reward.

#### Returns

[`WeightGiftItemBuilder`](WeightGiftItemBuilder.md)

## Properties

### data

> **data**: [`RewardWeightData`](../interfaces/RewardWeightData.md)[]

Defined in: lib/gift.ts:87

Data of the gift, including its reward and weight.

***

### sound?

> `optional` **sound**: `string`

Defined in: lib/gift.ts:88

Plays a sound when player receive the reward.

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/gift.ts:86

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

## Methods

### build()

> **build**(): `void`

Defined in: lib/gift.ts:93

Build the gift.

#### Returns

`void`

***

### giveReward()

> **giveReward**(`player`): `void`

Defined in: lib/gift.ts:105

Give reward to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`
