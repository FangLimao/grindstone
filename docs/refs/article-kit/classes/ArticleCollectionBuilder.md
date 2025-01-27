[**@grindstone/article-kit v0.2.0**](../README.md)

***

[@grindstone/article-kit](../globals.md) / ArticleCollectionBuilder

# Class: ArticleCollectionBuilder

Defined in: builder.ts:148

Create an article collection.
It likes [ChapterArticleBuilder](ChapterArticleBuilder.md), but support article unlock.

## Constructors

### new ArticleCollectionBuilder()

> **new ArticleCollectionBuilder**(`id`, `title`, `body`, `displayCondition`, `articles`): [`ArticleCollectionBuilder`](ArticleCollectionBuilder.md)

Defined in: builder.ts:156

#### Parameters

##### id

`string`

Collection's id.

##### title

Title of the collection.

`string` | `RawMessage`

##### body

Body of the collection.

`string` | `RawMessage`

##### displayCondition

`DisplayCondition`

Control when collection is displayed.

##### articles

([`ArticleBuilder`](ArticleBuilder.md) \| [`ChapterArticleBuilder`](ChapterArticleBuilder.md))[]

Articles in the collection.

#### Returns

[`ArticleCollectionBuilder`](ArticleCollectionBuilder.md)

## Properties

### articles

> **articles**: ([`ArticleBuilder`](ArticleBuilder.md) \| [`ChapterArticleBuilder`](ChapterArticleBuilder.md))[]

Defined in: builder.ts:161

Articles in the collection.

***

### body

> **body**: `string` \| `RawMessage`

Defined in: builder.ts:159

Body of the collection.

***

### displayCondition

> **displayCondition**: `DisplayCondition`

Defined in: builder.ts:160

Control when collection is displayed.

***

### id

> `readonly` **id**: `string`

Defined in: builder.ts:157

Collection's id.

***

### title

> **title**: `string` \| `RawMessage`

Defined in: builder.ts:158

Title of the collection.

## Methods

### build()

> **build**(): `void`

Defined in: builder.ts:202

Build the article collection.

#### Returns

`void`

***

### display()

> **display**(`player`): `void`

Defined in: builder.ts:166

Display the reading to a player.

#### Parameters

##### player

`Player`

#### Returns

`void`
