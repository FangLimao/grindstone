[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / DurabilityLimitedPropBuilder

# Class: DurabilityLimitedPropBuilder

Defined in: lib/prop.ts:33

A prop *(an item that can be used)* , its durability is consumed after use.

## Extends

- [`PropBuilder`](PropBuilder.md)

## Constructors

### new DurabilityLimitedPropBuilder()

> **new DurabilityLimitedPropBuilder**(`typeId`, `durabilityValue`, `useEvent`?): [`DurabilityLimitedPropBuilder`](DurabilityLimitedPropBuilder.md)

Defined in: lib/prop.ts:39

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### durabilityValue

`number`

The durability to be consumed.

##### useEvent?

(`arg`) => `void`

The event when an item is successfully used by a player.

#### Returns

[`DurabilityLimitedPropBuilder`](DurabilityLimitedPropBuilder.md)

#### Overrides

[`PropBuilder`](PropBuilder.md).[`constructor`](PropBuilder.md#constructors)

## Properties

### durabilityValue

> **durabilityValue**: `number`

Defined in: lib/prop.ts:41

The durability to be consumed.

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/prop.ts:40

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

#### Inherited from

[`PropBuilder`](PropBuilder.md).[`typeId`](PropBuilder.md#typeid-1)

***

### useEvent()?

> `optional` **useEvent**: (`arg`) => `void`

Defined in: lib/prop.ts:42

The event when an item is successfully used by a player.

#### Parameters

##### arg

`ItemUseAfterEvent`

#### Returns

`void`

#### Inherited from

[`PropBuilder`](PropBuilder.md).[`useEvent`](PropBuilder.md#useevent-1)

## Methods

### build()

> **build**(): `void`

Defined in: lib/prop.ts:49

Build the prop.

#### Returns

`void`

#### Overrides

[`PropBuilder`](PropBuilder.md).[`build`](PropBuilder.md#build)
