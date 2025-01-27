[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / ToolItem

# Class: ToolItem

Defined in: lib/tool.ts:156

Define a tool.

## Extends

- [`Tool`](Tool.md)

## Constructors

### new ToolItem()

> **new ToolItem**(`typeId`, `options`?): [`ToolItem`](ToolItem.md)

Defined in: lib/tool.ts:164

#### Parameters

##### typeId

`string`

Identifier of the type of items for the stack.
If a namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

##### options?

[`ToolOptions`](../interfaces/ToolOptions.md)

Additional options of the tool.

#### Returns

[`ToolItem`](ToolItem.md)

#### Overrides

[`Tool`](Tool.md).[`constructor`](Tool.md#constructors)

## Properties

### options?

> `optional` **options**: [`ToolOptions`](../interfaces/ToolOptions.md)

Defined in: lib/tool.ts:166

Additional options of the tool.

#### Inherited from

[`Tool`](Tool.md).[`options`](Tool.md#options-1)

***

### token

> `readonly` **token**: `string`

Defined in: lib/tool.ts:14

#### Inherited from

[`Tool`](Tool.md).[`token`](Tool.md#token-1)

***

### typeId

> `readonly` **typeId**: `string`

Defined in: lib/tool.ts:165

Identifier of the type of items for the stack.
If a namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

## Methods

### axeDurabilityTrigger()

> **axeDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:112

Consume durability when the tool use on logs.

#### Returns

`void`

#### Inherited from

[`Tool`](Tool.md).[`axeDurabilityTrigger`](Tool.md#axedurabilitytrigger)

***

### build()

> **build**(): `void`

Defined in: lib/tool.ts:25

Build the tool.

#### Returns

`void`

#### Inherited from

[`Tool`](Tool.md).[`build`](Tool.md#build)

***

### durabilityTrigger()

> **durabilityTrigger**(): `void`

Defined in: lib/tool.ts:40

Automatically consume durability for the tools.

#### Returns

`void`

#### Inherited from

[`Tool`](Tool.md).[`durabilityTrigger`](Tool.md#durabilitytrigger)

***

### hoeDurabilityTrigger()

> **hoeDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:90

Consume durability when the tool use on dirt as a hoe.

#### Returns

`void`

#### Inherited from

[`Tool`](Tool.md).[`hoeDurabilityTrigger`](Tool.md#hoedurabilitytrigger)

***

### identify()

> **identify**(`item`): `boolean`

Defined in: lib/tool.ts:170

Identify the item.

#### Parameters

##### item

`ItemStack`

#### Returns

`boolean`

#### Overrides

[`Tool`](Tool.md).[`identify`](Tool.md#identify)

***

### shovelDurabilityTrigger()

> **shovelDurabilityTrigger**(): `void`

Defined in: lib/tool.ts:67

Consume durability when the tool use on dirt as a shovel.

#### Returns

`void`

#### Inherited from

[`Tool`](Tool.md).[`shovelDurabilityTrigger`](Tool.md#shoveldurabilitytrigger)
