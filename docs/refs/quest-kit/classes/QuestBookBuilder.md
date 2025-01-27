[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestBookBuilder

# Class: QuestBookBuilder

Defined in: main/QuestBookBuilder.ts:11

Create a quest book.

## Constructors

### new QuestBookBuilder()

> **new QuestBookBuilder**(`id`, `title`, `body`, `quests`, `iconPath`?): [`QuestBookBuilder`](QuestBookBuilder.md)

Defined in: main/QuestBookBuilder.ts:21

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

##### quests

[`Quest`](Quest.md)[]

Quests of the quest book.

##### iconPath?

`string`

The icon of the book.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`

#### Returns

[`QuestBookBuilder`](QuestBookBuilder.md)

## Properties

### body

> **body**: `string` \| `RawMessage`

Defined in: main/QuestBookBuilder.ts:24

Body of the quest book.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: main/QuestBookBuilder.ts:26

The icon of the book.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`

***

### id

> `readonly` **id**: `string`

Defined in: main/QuestBookBuilder.ts:22

The unique id of the quest book.

***

### quests

> **quests**: [`Quest`](Quest.md)[]

Defined in: main/QuestBookBuilder.ts:25

Quests of the quest book.

***

### title

> **title**: `string` \| `RawMessage`

Defined in: main/QuestBookBuilder.ts:23

Title of the quest book.

## Methods

### addQuest()

> **addQuest**(`quest`, `message`?): `void`

Defined in: main/QuestBookBuilder.ts:58

Add a quest.

#### Parameters

##### quest

[`Quest`](Quest.md)

##### message?

Optional information will be sent to world.

`string` | `RawMessage`

#### Returns

`void`

***

### build()

> **build**(): `void`

Defined in: main/QuestBookBuilder.ts:80

Build this quest book.

#### Returns

`void`

***

### display()

> **display**(`player`, `backTo`?): `void`

Defined in: main/QuestBookBuilder.ts:33

Display the book to the player.

#### Parameters

##### player

`Player`

##### backTo?

The screen player should return to after closing the form.

[`QuestBookCategory`](QuestBookCategory.md) | [`QuestBoardBuilder`](QuestBoardBuilder.md)

#### Returns

`void`

***

### getQuest()

> **getQuest**(`id`): `undefined` \| [`Quest`](Quest.md)

Defined in: main/QuestBookBuilder.ts:68

Get the quest by id.

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`Quest`](Quest.md)

***

### getQuests()

> **getQuests**(): [`Quest`](Quest.md)[]

Defined in: main/QuestBookBuilder.ts:74

Get all quests.

#### Returns

[`Quest`](Quest.md)[]
