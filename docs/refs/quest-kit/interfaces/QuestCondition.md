[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestCondition

# Interface: QuestCondition

Defined in: lib/interface.ts:79

Conditions of a quest.

## Properties

### item?

> `optional` **item**: `ItemData`

Defined in: lib/interface.ts:83

Match only typeId and min amount.

***

### killEntity?

> `optional` **killEntity**: `EntityData`

Defined in: lib/interface.ts:95

The specific entity will be required to unlock the quest.

***

### playerXpLevel?

> `optional` **playerXpLevel**: `number`

Defined in: lib/interface.ts:87

The specific level will be required to unlock the quest.

***

### playerXpPoint?

> `optional` **playerXpPoint**: `number`

Defined in: lib/interface.ts:91

The specific point will be required to unlock the quest.

***

### quests?

> `optional` **quests**: [`Quest`](../classes/Quest.md)[]

Defined in: lib/interface.ts:99

The specific quests will be required to unlock the quest.
