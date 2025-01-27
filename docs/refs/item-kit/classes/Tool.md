[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / Tool

# Class: `abstract` Tool

Defined in: lib/tool.ts:12

The abstract tool.

## Extended by

- [`ToolTag`](ToolTag.md)
- [`ToolItem`](ToolItem.md)

## Constructors

### new Tool()

> **new Tool**(`token`, `options`?): [`Tool`](Tool.md)

Defined in: lib/tool.ts:13

#### Parameters

##### token

`string`

##### options?

[`ToolOptions`](../interfaces/ToolOptions.md)

#### Returns

[`Tool`](Tool.md)

## Properties

### options?

> `optional` **options**: [`ToolOptions`](../interfaces/ToolOptions.md)

Defined in: lib/tool.ts:15

***

### token

> `readonly` **token**: `string`

Defined in: lib/tool.ts:14

## Methods

### axeDurabilityTrigger()

> **axeDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:112

Consume durability when the tool use on logs.

#### Returns

`void`

***

### build()

> **build**(): `void`

Defined in: lib/tool.ts:25

Build the tool.

#### Returns

`void`

***

### durabilityTrigger()

> **durabilityTrigger**(): `void`

Defined in: lib/tool.ts:40

Automatically consume durability for the tools.

#### Returns

`void`

***

### hoeDurabilityTrigger()

> **hoeDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:90

Consume durability when the tool use on dirt as a hoe.

#### Returns

`void`

***

### identify()

> `abstract` **identify**(`item`): `boolean`

Defined in: lib/tool.ts:21

Identify the item.

#### Parameters

##### item

`ItemStack`

#### Returns

`boolean`

***

### shovelDurabilityTrigger()

> **shovelDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:67

Consume durability when the tool use on dirt as a shovel.

#### Returns

`void`
