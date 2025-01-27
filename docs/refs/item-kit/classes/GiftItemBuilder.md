[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / GiftItemBuilder

# Class: GiftItemBuilder

Defined in: lib/gift.ts:13

Define a gift item.

## Extended by

- [`PercentGiftItemBuilder`](PercentGiftItemBuilder.md)

## Constructors

### new GiftItemBuilder()

> **new GiftItemBuilder**(`typeId`, `reward`, `sound`?): [`GiftItemBuilder`](GiftItemBuilder.md)

Defined in: lib/gift.ts:19

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### reward

[`RewardType`](../interfaces/RewardType.md)

Rewards of the gift.

##### sound?

`string`

Plays a sound when player receive the reward.

#### Returns

[`GiftItemBuilder`](GiftItemBuilder.md)

## Properties

### reward

> **reward**: [`RewardType`](../interfaces/RewardType.md)

Defined in: lib/gift.ts:21

Rewards of the gift.

***

### sound?

> `optional` **sound**: `string`

Defined in: lib/gift.ts:22

Plays a sound when player receive the reward.

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/gift.ts:20

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

## Methods

### build()

> **build**(): `void`

Defined in: lib/gift.ts:27

Build the gift.

#### Returns

`void`

***

### giveReward()

> **giveReward**(`player`): `void`

Defined in: lib/gift.ts:39

Give reward to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`
