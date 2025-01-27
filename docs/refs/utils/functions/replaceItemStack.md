[**@grindstone/utils v0.7.2**](../README.md)

***

[@grindstone/utils](../globals.md) / replaceItemStack

# Function: replaceItemStack()

> **replaceItemStack**(`item`, `newItem`, `container`): `number`

Defined in: item.ts:19

Replace ItemStack in a Container

## Parameters

### item

The ItemStack or ItemStack.typeId to be replaced.
if it's undefined, every empty slot will be filled.

`undefined` | `ItemStack`

### newItem

the new ItemStack.
if it's undefined, the matched slot will be cleared.

`undefined` | `ItemStack`

### container

`Container`

the Container which will be searched.

## Returns

`number`
