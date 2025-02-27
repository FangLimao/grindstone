import {
  Article,
  articleIdList,
  articleList,
} from "./core";

/**
 * 管理文章数据的类
 * 
 * 该类提供了获取所有文章和文章ID列表的方法，以及根据ID获取特定文章的功能。
 * 
 * 核心功能包括：
 * - 获取所有文章列表
 * - 获取所有文章ID列表
 * - 根据ID获取特定文章
 * 
 * @example
 * 
 * const allArticles = ArticleManager.getAllArticle();
 * const allArticleIds = ArticleManager.getAllArticleId();
 * const articleById = ArticleManager.getArticle("article:114514");
 * 
 * @category Stable
 * @since 1.0.0
 */
export class ArticleManager {
  /**
   * 获取所有文章
   * @returns 所有已经注册的文章
   */
  static getAllArticles(): Article[] {
    const arr: Article[] = [];
    articleList.forEach((article) => {
      if(article instanceof Article) arr.push(article);
    })
    return arr;
  }
  /**
   * 获取所有文章ID
   * @returns 所有文章的ID
   */
  static getAllArticleId(): string[] {
    return articleIdList;
  }
  /**
   * 根据文章ID获取文章
   * @param id 文章ID
   * @returns 返回找到的文章，如果没有找到则返回`undefined`
   */
  static getArticle(
    id: string
  ): undefined | Article {
    articleList.forEach((article) => {
      if (article.id === id) {
        return article;
      }
    });
    return;
  }
}
