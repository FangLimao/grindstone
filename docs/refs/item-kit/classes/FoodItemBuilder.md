[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / FoodItemBuilder

# Class: FoodItemBuilder

Defined in: lib/food.ts:8

Define a food item.

## Constructors

### new FoodItemBuilder()

> **new FoodItemBuilder**(`typeId`, `statusEffects`?, `eatEvent`?): [`FoodItemBuilder`](FoodItemBuilder.md)

Defined in: lib/food.ts:14

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### statusEffects?

`EffectData`[]

Adds a status effect when entity eat the food.

##### eatEvent?

(`arg`) => `void`

This event fires when eat the food.

#### Returns

[`FoodItemBuilder`](FoodItemBuilder.md)

## Properties

### eatEvent()?

> `optional` **eatEvent**: (`arg`) => `void`

Defined in: lib/food.ts:17

This event fires when eat the food.

#### Parameters

##### arg

`ItemCompleteUseAfterEvent`

#### Returns

`void`

***

### statusEffects?

> `optional` **statusEffects**: `EffectData`[]

Defined in: lib/food.ts:16

Adds a status effect when entity eat the food.

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/food.ts:15

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

## Methods

### build()

> **build**(): `void`

Defined in: lib/food.ts:29

Build this food item.

#### Returns

`void`

***

### getItemStack()

> **getItemStack**(): `ItemStack`

Defined in: lib/food.ts:23

Get the food's item stack.

#### Returns

`ItemStack`
