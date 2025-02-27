[@grindstone/article-kit](../globals.md) / ArticleCenter

# Class: ArticleCenter

Defined in: core.ts:234

集中显示文章的类

核心功能包括：
- 显示文章列表给玩家
- 处理文章的解锁和显示

注意事项：
- 如果`articles`参数为布尔值，如果为`true`，则会从该脚本环境注册的所有文章中显示已经解锁的文章，反之则显示无文章提示
- 如果`articles`参数为文章列表，则只从提供的文章中显示已解锁的文章

## Example

```ts
const articleCenter = new ArticleCenter("article:id", title, body, true);
articleCenter.display(player); // 显示文章中心给玩家
articleCenter.subscribeEvent("itemId"); // 注册文章事件
articleCenter.registryComponent("componentName"); // 注册自定义组件
```

## Since

1.0.0

## Extends

- [`BaseArticle`](BaseArticle.md)

## Constructors

### new ArticleCenter()

> **new ArticleCenter**(`id`, `title`, `body`, `articles`): [`ArticleCenter`](ArticleCenter.md)

Defined in: core.ts:241

#### Parameters

##### id

`string`

文章中心ID

##### title

[`ArticleText`](../type-aliases/ArticleText.md)

文章中心标题

##### body

[`ArticleText`](../type-aliases/ArticleText.md)

文章中心内容

##### articles

可用的文章，如果为`true`，则会从该脚本环境注册的所有文章中显示已经解锁的文章，反之则显示无文章提示，如果为文章列表，则只从提供的文章中显示已解锁的文章

`boolean` | [`Article`](Article.md)[]

#### Returns

[`ArticleCenter`](ArticleCenter.md)

#### Overrides

[`BaseArticle`](BaseArticle.md).[`constructor`](BaseArticle.md#constructors)

## Properties

### articles

> **articles**: `boolean` \| [`Article`](Article.md)[]

Defined in: core.ts:245

可用的文章，如果为`true`，则会从该脚本环境注册的所有文章中显示已经解锁的文章，反之则显示无文章提示，如果为文章列表，则只从提供的文章中显示已解锁的文章

***

### body

> **body**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:244

文章中心内容

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`body`](BaseArticle.md#body-1)

***

### data

> **data**: `any`

Defined in: core.ts:39

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`data`](BaseArticle.md#data-1)

***

### id

> `readonly` **id**: `string`

Defined in: core.ts:242

文章中心ID

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`id`](BaseArticle.md#id-1)

***

### title

> **title**: [`ArticleText`](../type-aliases/ArticleText.md)

Defined in: core.ts:243

文章中心标题

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`title`](BaseArticle.md#title-1)

## Methods

### display()

> **display**(`player`): `void`

Defined in: core.ts:253

向玩家展示文章中心

#### Parameters

##### player

`Player`

要展示文章中心的玩家

#### Returns

`void`

#### Overrides

[`BaseArticle`](BaseArticle.md).[`display`](BaseArticle.md#display)

***

### registryComponent()

> **registryComponent**(`componentName`): `void`

Defined in: core.ts:64

将该文章注册为自定义物品组件

#### Parameters

##### componentName

`string`

自定义组件名称

#### Returns

`void`

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`registryComponent`](BaseArticle.md#registrycomponent)

***

### subscribeEvent()

> **subscribeEvent**(`typeId`): `void`

Defined in: core.ts:53

注册文章事件

#### Parameters

##### typeId

`string`

文章的物品ID

#### Returns

`void`

#### Inherited from

[`BaseArticle`](BaseArticle.md).[`subscribeEvent`](BaseArticle.md#subscribeevent)
