[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / PercentGiftItemBuilder

# Class: PercentGiftItemBuilder

Defined in: lib/gift.ts:47

A Percent-Driven random reward gift.

## Extends

- [`GiftItemBuilder`](GiftItemBuilder.md)

## Constructors

### new PercentGiftItemBuilder()

> **new PercentGiftItemBuilder**(`typeId`, `chance`, `reward`, `sound`?): [`PercentGiftItemBuilder`](PercentGiftItemBuilder.md)

Defined in: lib/gift.ts:54

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### chance

`number`

The probability of give reward when use the gift, should be a percentage (0~1).

##### reward

[`RewardType`](../interfaces/RewardType.md)

Rewards of the gift.

##### sound?

`string`

Plays a sound when player receive the reward.

#### Returns

[`PercentGiftItemBuilder`](PercentGiftItemBuilder.md)

#### Overrides

[`GiftItemBuilder`](GiftItemBuilder.md).[`constructor`](GiftItemBuilder.md#constructors)

## Properties

### chance

> **chance**: `number`

Defined in: lib/gift.ts:56

The probability of give reward when use the gift, should be a percentage (0~1).

***

### reward

> **reward**: [`RewardType`](../interfaces/RewardType.md)

Defined in: lib/gift.ts:57

Rewards of the gift.

#### Inherited from

[`GiftItemBuilder`](GiftItemBuilder.md).[`reward`](GiftItemBuilder.md#reward-1)

***

### sound?

> `optional` **sound**: `string`

Defined in: lib/gift.ts:58

Plays a sound when player receive the reward.

#### Inherited from

[`GiftItemBuilder`](GiftItemBuilder.md).[`sound`](GiftItemBuilder.md#sound-1)

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/gift.ts:55

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

#### Inherited from

[`GiftItemBuilder`](GiftItemBuilder.md).[`typeId`](GiftItemBuilder.md#typeid-1)

## Methods

### build()

> **build**(): `void`

Defined in: lib/gift.ts:27

Build the gift.

#### Returns

`void`

#### Inherited from

[`GiftItemBuilder`](GiftItemBuilder.md).[`build`](GiftItemBuilder.md#build)

***

### giveReward()

> **giveReward**(`player`): `void`

Defined in: lib/gift.ts:66

Give reward to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`

#### Overrides

[`GiftItemBuilder`](GiftItemBuilder.md).[`giveReward`](GiftItemBuilder.md#givereward)
