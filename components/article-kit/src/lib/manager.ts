import {
  ArticleBuilder,
  ArticleCollectionBuilder,
  articleIdList,
  articleList,
} from "./builder";

export class ArticleManager {
  /**
   * Get all articles.
   * @returns All registried articles.
   */
  static getAllArticle(): (ArticleCollectionBuilder | ArticleBuilder)[] {
    return articleList;
  }
  /**
   * Get all articles' id.
   * @returns
   */
  static getAllArticleId(): string[] {
    return articleIdList;
  }
  /**
   * Get specified article by id.
   * @param id The specified article id.
   * @returns The specified article.
   */
  static getArticle(
    id: string
  ): undefined | ArticleBuilder | ArticleCollectionBuilder {
    articleList.forEach((article) => {
      if (article.id === id) {
        return article;
      }
    });
    return;
  }
}
