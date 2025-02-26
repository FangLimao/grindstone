import {
  Article,
  ArticleCollection,
  articleIdList,
  articleList,
} from "./builder";

export class ArticleManager {
  /**
   * Get all articles.
   * @returns All registried articles.
   */
  static getAllArticle(): (ArticleCollection | Article)[] {
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
  ): undefined | Article | ArticleCollection {
    articleList.forEach((article) => {
      if (article.id === id) {
        return article;
      }
    });
    return;
  }
}
