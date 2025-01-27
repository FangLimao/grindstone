[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / ToolTag

# Class: ToolTag

Defined in: lib/tool.ts:136

Define a tool tag.

## Extends

- [`Tool`](Tool.md)

## Constructors

### new ToolTag()

> **new ToolTag**(`tag`, `options`?): [`ToolTag`](ToolTag.md)

Defined in: lib/tool.ts:141

#### Parameters

##### tag

`string`

The tool tag.

##### options?

[`ToolOptions`](../interfaces/ToolOptions.md)

Additional options of the tool.

#### Returns

[`ToolTag`](ToolTag.md)

#### Overrides

[`Tool`](Tool.md).[`constructor`](Tool.md#constructors)

## Properties

### options?

> `optional` **options**: [`ToolOptions`](../interfaces/ToolOptions.md)

Defined in: lib/tool.ts:143

Additional options of the tool.

#### Inherited from

[`Tool`](Tool.md).[`options`](Tool.md#options-1)

***

### tag

> `readonly` **tag**: `string`

Defined in: lib/tool.ts:142

The tool tag.

***

### token

> `readonly` **token**: `string`

Defined in: lib/tool.ts:14

#### Inherited from

[`Tool`](Tool.md).[`token`](Tool.md#token-1)

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

Defined in: lib/tool.ts:147

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
