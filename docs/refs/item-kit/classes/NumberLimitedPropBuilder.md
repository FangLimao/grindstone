[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / NumberLimitedPropBuilder

# Class: NumberLimitedPropBuilder

Defined in: lib/prop.ts:69

A prop *(an item that can be used)* , it has a limited number of uses.

## Extends

- [`PropBuilder`](PropBuilder.md)

## Constructors

### new NumberLimitedPropBuilder()

> **new NumberLimitedPropBuilder**(`typeId`, `options`, `useEvent`?): [`NumberLimitedPropBuilder`](NumberLimitedPropBuilder.md)

Defined in: lib/prop.ts:75

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

##### options

[`NumberLimitedPropOptions`](../interfaces/NumberLimitedPropOptions.md)

Options of the prop.

##### useEvent?

(`arg`) => `void`

The event when an item is successfully used by a player.

#### Returns

[`NumberLimitedPropBuilder`](NumberLimitedPropBuilder.md)

#### Overrides

[`PropBuilder`](PropBuilder.md).[`constructor`](PropBuilder.md#constructors)

## Properties

### options

> **options**: [`NumberLimitedPropOptions`](../interfaces/NumberLimitedPropOptions.md)

Defined in: lib/prop.ts:77

Options of the prop.

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/prop.ts:76

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed.

#### Inherited from

[`PropBuilder`](PropBuilder.md).[`typeId`](PropBuilder.md#typeid-1)

***

### useEvent()?

> `optional` **useEvent**: (`arg`) => `void`

Defined in: lib/prop.ts:78

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

Defined in: lib/prop.ts:88

Build the prop.

#### Returns

`void`

#### Overrides

[`PropBuilder`](PropBuilder.md).[`build`](PropBuilder.md#build)
