# Grindstone Article Kit

这是一个用于在 Minecraft 中创建和展示文章的库，其提供了一系列的类和方法，用于创建和管理文章，包括文章的显示、解锁和注册事件。

## 类和方法
### `Article`类

`Article`类用于创建一篇文章，有以下属性和方法：

- `id`：文章的唯一标识符；
- `title`：文章的标题，可以是字符串、`RawMessage`或一个函数；
- `body`：文章的内容，可以是字符串、`RawMessage`或一个函数；
- `chapters`：文章的章节列表，每个章节包含标题、内容和图标路径；
- `iconPath`：文章的图标路径；
- `needUnlock`：文章是否需要解锁；
- `display(player: Player, backTo?: ArticleCenter | Article)`：向玩家展示文章；
- `unlock(player: Player)`：在文章中心里解锁文章；
- `checkUnlock(player: Player)`：检查文章是否在文章中心里解锁；
- `subscribeEvent(typeId: string)`：注册文章事件；
- `registryComponent(componentName: string)`：将文章注册为自定义物品组件。

### `ArticleCenter`类

`ArticleCenter`类用于集中显示文章。它有以下属性和方法：

- `id`：文章中心的唯一标识符；
- `title`：文章中心的标题，可以是字符串、`RawMessage`或一个函数；
- `body`：文章中心的内容，可以是字符串、`RawMessage`或一个函数；
- `articles`：可用的文章，可以是布尔值、文章列表或文章中心；
- `display(player: Player)`：向玩家展示文章中心；
- `subscribeEvent(typeId: string)`：注册文章事件；
- `registryComponent(componentName: string)`：将文章中心注册为自定义物品组件。

### `ChapterData`接口

`ChapterData`接口用于定义文章的章节。它有以下属性：

- `title`：章节的标题，可以是字符串、`RawMessage`或一个函数；
- `body`：章节的内容，可以是字符串、`RawMessage`或一个函数；
- `iconPath`：章节的图标路径。

## 范例

```typescript
const articleCenter = new ArticleCenter("article:id", title, body, true);
articleCenter.display(player); // 显示文章中心给玩家
articleCenter.subscribeEvent("itemId"); // 注册文章事件
articleCenter.registryComponent("componentName"); // 注册自定义组件
```

## 文章管理器

文章管理器（Article Manager）是一个用于管理文章数据的类,提供了获取所有文章和文章ID列表的方法，以及根据ID获取特定文章的功能。

## 范例

```typescript
const allArticles = ArticleManager.getAllArticle(); // 获取所有文章
const allArticleIds = ArticleManager.getAllArticleId(); // 获取所有文章ID
const articleById = ArticleManager.getArticle("article:114514"); // 根据ID获取文章
```