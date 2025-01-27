[**@grindstone/item-kit v0.6.0**](../README.md)

***

[@grindstone/item-kit](../globals.md) / ItemApiUtils

# Class: ItemApiUtils

Defined in: utils.ts:23

Some useful functions for Item Api.

## Constructors

### new ItemApiUtils()

> **new ItemApiUtils**(): [`ItemApiUtils`](ItemApiUtils.md)

#### Returns

[`ItemApiUtils`](ItemApiUtils.md)

## Methods

### disposeItem()

> `static` **disposeItem**(`durability`, `item`, `entity`, `event`?): `void`

Defined in: utils.ts:31

Dispose the tool or weapon when player use it.

#### Parameters

##### durability

`number`

The durability to reduce.

##### item

`ItemStack`

The item to be used.

##### entity

`Entity`

The entity that used the item.

##### event?

(`holder`, `item`) => `void`

#### Returns

`void`
