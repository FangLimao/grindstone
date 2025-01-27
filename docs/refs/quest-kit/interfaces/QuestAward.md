[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestAward

# Interface: QuestAward

Defined in: lib/interface.ts:56

Award of a quest.

## Properties

### custom()?

> `optional` **custom**: (`player`) => `void`

Defined in: lib/interface.ts:73

The custom award.

#### Parameters

##### player

`Player`

#### Returns

`void`

***

### exp?

> `optional` **exp**: `number`

Defined in: lib/interface.ts:68

The specific point will be given to the player.

***

### item?

> `optional` **item**: `ItemData`

Defined in: lib/interface.ts:60

Player will get these items when the quest is finished.

***

### level?

> `optional` **level**: `number`

Defined in: lib/interface.ts:64

The specific level will be given to the player.
