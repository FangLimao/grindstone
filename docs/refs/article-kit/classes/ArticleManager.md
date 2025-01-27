[**@grindstone/article-kit v0.2.0**](../README.md)

***

[@grindstone/article-kit](../globals.md) / ArticleManager

# Class: ArticleManager

Defined in: manager.ts:8

## Constructors

### new ArticleManager()

> **new ArticleManager**(): [`ArticleManager`](ArticleManager.md)

#### Returns

[`ArticleManager`](ArticleManager.md)

## Methods

### getAllArticle()

> `static` **getAllArticle**(): ([`ArticleCollectionBuilder`](ArticleCollectionBuilder.md) \| [`ArticleBuilder`](ArticleBuilder.md))[]

Defined in: manager.ts:13

Get all articles.

#### Returns

([`ArticleCollectionBuilder`](ArticleCollectionBuilder.md) \| [`ArticleBuilder`](ArticleBuilder.md))[]

All registried articles.

***

### getAllArticleId()

> `static` **getAllArticleId**(): `string`[]

Defined in: manager.ts:20

Get all articles' id.

#### Returns

`string`[]

***

### getArticle()

> `static` **getArticle**(`id`): `undefined` \| [`ArticleCollectionBuilder`](ArticleCollectionBuilder.md) \| [`ArticleBuilder`](ArticleBuilder.md)

Defined in: manager.ts:28

Get specified article by id.

#### Parameters

##### id

`string`

The specified article id.

#### Returns

`undefined` \| [`ArticleCollectionBuilder`](ArticleCollectionBuilder.md) \| [`ArticleBuilder`](ArticleBuilder.md)

The specified article.
