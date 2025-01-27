[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / PropBuilder

# Class: PropBuilder

Defined in: lib/prop.ts:8

A simple prop *(an item that can be used)* , can only be used once.

## Extended by

- [`DurabilityLimitedPropBuilder`](DurabilityLimitedPropBuilder.md)
- [`NumberLimitedPropBuilder`](NumberLimitedPropBuilder.md)

## Constructors

### new PropBuilder()

> **new PropBuilder**(`typeId`, `useEvent`?): [`PropBuilder`](PropBuilder.md)

Defined in: lib/prop.ts:13

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### useEvent?

(`arg`) => `void`

The event when an item is successfully used by a player.

#### Returns

[`PropBuilder`](PropBuilder.md)

## Properties

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/prop.ts:14

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

***

### useEvent()?

> `optional` **useEvent**: (`arg`) => `void`

Defined in: lib/prop.ts:15

The event when an item is successfully used by a player.

#### Parameters

##### arg

`ItemUseAfterEvent`

#### Returns

`void`

## Methods

### build()

> **build**(): `void`

Defined in: lib/prop.ts:20

Build the prop.

#### Returns

`void`
