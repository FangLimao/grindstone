**@grindstone/article-kit v0.2.0**

***

# Grindstone Article Kit
## 构建文章
你可以通过`ArticleBuilder`类构建一篇文章： 

~~~ts
class ArticleBuilder {
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public iconPath?: string,
    public needUnlock = true
  ) {}
}

// 这里的 `id` 需要与物品ID一致
const article = new ArticleBuilder("id", "测试标题", "测试文章内容")
~~~

然后通过`build()`方法使其可以在游戏中被查看：

~~~ts
article.build()
~~~

## 带章节的文章
你可以通过`ChapterArticleBuilder`类构建一篇带章节的文章： 

~~~ts
class ChapterArticleBuilder extends ArticleBuilder {
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public chapters: ChapterData[],
    public iconPath?: string,
    public needUnlock = true
  ) {}
}

interface ChapterData {
  title: string | RawMessage;
  body: string | RawMessage;
  iconPath?: string;
}

// 这里的 `id` 需要与物品ID一致
const chapterArticle = new ChapterArticleBuilder("id", "测试标题", "测试文章内容",
  [
    {
      title: "章节1",
      body: "章节内容"
    }
  ]
)
~~~

然后通过`build()`方法使其可以在游戏中被查看：

~~~ts
chapterArticle.build()
~~~

## 文章收藏集
~~~ts
class ArticleCollectionBuilder {
  constructor(
    public readonly id: string,
    public title: string | RawMessage,
    public body: string | RawMessage,
    public displayCondition: DisplayCondition,
    public articles: (ArticleBuilder | ChapterArticleBuilder)[]
  ) {}
}

interface DisplayCondition {
  default?: boolean;
  itemStack?: ItemStack;
  firstLoad?: boolean;
}

const collection = new ArticleCollectionBuilder("id", "测试标题", "收藏级摘要", {
  default: true, // 使收藏集可以像普通文章一样打开物品阅读
  itemStack: new ItemStack("item_id"), // 指定收藏集对应的物品
  firstLoad: true, // 当玩家首次进入世界时显示收藏集
}, 
[ article1, article2, article3 ]
)
~~~

然后通过`build()`方法使其可以在游戏中被查看：

~~~ts
collection.build()
~~~

你可以通过修改文章的`needUnlock`属性决定文章是否需要解锁（阅读过该文章）才可以在收藏集中出现。

### 设置语言文件
文章收藏集需要你在语言文件添加以下内容才可以正常工作：

~~~
article.nothing.title=无解锁文章
article.nothing.body=没有任何文章解锁，你可以得到并阅读一篇文章来解锁它。
~~~

## 文章管理
你可以通过ArticleManager来管理文章：

~~~ts
// 获取所有文章
ArticleManager.getAllArticle();
// 获取所有文章ID
ArticleManager.getAllArticleId();
// 获取特定文章ID
ArticleManager.getArticle("id");
~~~
