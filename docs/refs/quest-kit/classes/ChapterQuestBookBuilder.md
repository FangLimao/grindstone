[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / ChapterQuestBookBuilder

# Class: ChapterQuestBookBuilder

Defined in: main/ChapterQuestBookBuilder.ts:9

Create a Quest Book with Chapters.

## Constructors

### new ChapterQuestBookBuilder()

> **new ChapterQuestBookBuilder**(`id`, `title`, `body`, `chapters`, `iconPath`?): [`ChapterQuestBookBuilder`](ChapterQuestBookBuilder.md)

Defined in: main/ChapterQuestBookBuilder.ts:19

#### Parameters

##### id

`string`

The unique id of the quest book.

##### title

Title of the quest book.

`string` | `RawMessage`

##### body

Body of the quest book.

`string` | `RawMessage`

##### chapters

[`QuestChapter`](../interfaces/QuestChapter.md)[]

Chapters of the quest book.

##### iconPath?

`string`

The icon of the book.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`

#### Returns

[`ChapterQuestBookBuilder`](ChapterQuestBookBuilder.md)

## Properties

### body

> `protected` **body**: `string` \| `RawMessage`

Defined in: main/ChapterQuestBookBuilder.ts:22

Body of the quest book.

***

### chapters

> **chapters**: [`QuestChapter`](../interfaces/QuestChapter.md)[]

Defined in: main/ChapterQuestBookBuilder.ts:23

Chapters of the quest book.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: main/ChapterQuestBookBuilder.ts:24

The icon of the book.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`

***

### id

> `readonly` **id**: `string`

Defined in: main/ChapterQuestBookBuilder.ts:20

The unique id of the quest book.

***

### title

> `protected` **title**: `string` \| `RawMessage`

Defined in: main/ChapterQuestBookBuilder.ts:21

Title of the quest book.

## Methods

### build()

> **build**(): `void`

Defined in: main/ChapterQuestBookBuilder.ts:83

Build this quest book.

#### Returns

`void`

***

### display()

> **display**(`player`): `void`

Defined in: main/ChapterQuestBookBuilder.ts:30

Display the book to the player.

#### Parameters

##### player

`Player`

#### Returns

`void`
