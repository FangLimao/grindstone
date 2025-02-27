[@grindstone/article-kit](../globals.md) / ArticleManager

# Class: ArticleManager

Defined in: manager.ts:26

管理文章数据的类

该类提供了获取所有文章和文章ID列表的方法，以及根据ID获取特定文章的功能。

核心功能包括：
- 获取所有文章列表
- 获取所有文章ID列表
- 根据ID获取特定文章

## Example

```ts
const allArticles = ArticleManager.getAllArticle();
const allArticleIds = ArticleManager.getAllArticleId();
const articleById = ArticleManager.getArticle("article:114514");
```

## Since

1.0.0

## Constructors

### new ArticleManager()

> **new ArticleManager**(): [`ArticleManager`](ArticleManager.md)

#### Returns

[`ArticleManager`](ArticleManager.md)

## Methods

### getAllArticleId()

> `static` **getAllArticleId**(): `string`[]

Defined in: manager.ts:42

获取所有文章ID

#### Returns

`string`[]

所有文章的ID

***

### getAllArticles()

> `static` **getAllArticles**(): [`Article`](Article.md)[]

Defined in: manager.ts:31

获取所有文章

#### Returns

[`Article`](Article.md)[]

所有已经注册的文章

***

### getArticle()

> `static` **getArticle**(`id`): `undefined` \| [`Article`](Article.md)

Defined in: manager.ts:50

根据文章ID获取文章

#### Parameters

##### id

`string`

文章ID

#### Returns

`undefined` \| [`Article`](Article.md)

返回找到的文章，如果没有找到则返回`undefined`
