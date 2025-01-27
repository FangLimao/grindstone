[**@grindstone/quest-kit v0.2.0**](../README.md)

***

[@grindstone/quest-kit](../globals.md) / QuestBookCategory

# Class: QuestBookCategory

Defined in: main/QuestBookCategory.ts:9

Book Category for [QuestBoardBuilder](QuestBoardBuilder.md).

## Constructors

### new QuestBookCategory()

> **new QuestBookCategory**(`title`, `body`, `books`, `iconPath`?): [`QuestBookCategory`](QuestBookCategory.md)

Defined in: main/QuestBookCategory.ts:18

#### Parameters

##### title

Title of the category.

`string` | `RawMessage`

##### body

Body of the category.

`string` | `RawMessage`

##### books

[`QuestBookBuilder`](QuestBookBuilder.md)[]

The quest books that included in category.

##### iconPath?

`string`

The icon of the category.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`.

#### Returns

[`QuestBookCategory`](QuestBookCategory.md)

## Properties

### body

> **body**: `string` \| `RawMessage`

Defined in: main/QuestBookCategory.ts:20

Body of the category.

***

### books

> **books**: [`QuestBookBuilder`](QuestBookBuilder.md)[]

Defined in: main/QuestBookCategory.ts:21

The quest books that included in category.

***

### iconPath?

> `optional` **iconPath**: `string`

Defined in: main/QuestBookCategory.ts:22

The icon of the category.
It should be the path from the root of the resource pack, like `texture/gui/example_pic`.

***

### title

> **title**: `string` \| `RawMessage`

Defined in: main/QuestBookCategory.ts:19

Title of the category.

## Methods

### display()

> **display**(`player`): `void`

Defined in: main/QuestBookCategory.ts:28

Display the category form to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`
