[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestOptions

# Interface: QuestOptions

Defined in: lib/interface.ts:32

## Properties

### award

> **award**: [`QuestAward`](QuestAward.md)

Defined in: lib/interface.ts:40

It will be called when the Quest is completed by the player.

***

### condition

> **condition**: [`QuestCondition`](QuestCondition.md)

Defined in: lib/interface.ts:36

Condition to complete the quest.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: lib/interface.ts:50

The icon of the Quest.
It should be the path from the root of the resource pack.

#### Example

```ts
texture/gui/example_pic
```

***

### tips?

> `optional` **tips**: `string` \| `RawMessage`

Defined in: lib/interface.ts:44

Tips of the quest.
