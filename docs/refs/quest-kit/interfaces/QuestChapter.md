[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestChapter

# Interface: QuestChapter

Defined in: lib/interface.ts:9

Chapters of a quest book.

## Properties

### body

> **body**: `string` \| `RawMessage`

Defined in: lib/interface.ts:17

Body of the chapter.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: lib/interface.ts:27

The icon of the Chapter.
It should be the path from the root of the resource pack.

#### Example

```ts
texture/gui/example_pic
```

***

### quests

> **quests**: [`Quest`](../classes/Quest.md)[]

Defined in: lib/interface.ts:21

Quests of the chapter.

***

### title

> **title**: `string` \| `RawMessage`

Defined in: lib/interface.ts:13

Title of the chapter.
