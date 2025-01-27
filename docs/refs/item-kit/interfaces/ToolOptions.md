[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / ToolOptions

# Interface: ToolOptions

Defined in: lib/tool.ts:180

## Properties

### closeDurabilityTrigger?

> `optional` **closeDurabilityTrigger**: `boolean`

Defined in: lib/tool.ts:189

***

### closeUseDurabilityTrigger?

> `optional` **closeUseDurabilityTrigger**: `boolean`

Defined in: lib/tool.ts:190

***

### destroyedAfterEvents()?

> `optional` **destroyedAfterEvents**: (`holder`, `item`) => `void`

Defined in: lib/tool.ts:188

Trigger events when the tool has been destroyed.

#### Parameters

##### holder

`Entity`

##### item

`ItemStack`

#### Returns

`void`

***

### type?

> `optional` **type**: [`ToolType`](../type-aliases/ToolType.md)

Defined in: lib/tool.ts:184

Type of the tool.
