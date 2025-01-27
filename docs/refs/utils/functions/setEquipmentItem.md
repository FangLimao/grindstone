[**@grindstone/utils v0.7.2**](../README.md)

***

[@grindstone/utils](../globals.md) / setEquipmentItem

# Function: setEquipmentItem()

> **setEquipmentItem**(`entity`, `item`?, `slot`?): `boolean` \| `undefined`

Defined in: entity.ts:211

Replaces the item in the given EquipmentSlot.

## Parameters

### entity

`Entity`

The owner of the slot.

### item?

`ItemStack`

The item to equip. If undefined, clears the slot.

### slot?

`EquipmentSlot` = `EquipmentSlot.Mainhand`

The slot to set item stack, default is EquipmentSlot.Mainhand.

## Returns

`boolean` \| `undefined`
