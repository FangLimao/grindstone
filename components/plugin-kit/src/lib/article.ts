import { Player } from "@minecraft/server";

/**
 * 处理与文章相关的操作
 * 
 * @example
 * // 打开指定ID的文章
 * ArticlePlugin.openArticle("article:123", player);
 * 
 */
export class ArticlePlugin {
  private constructor() {}
  /**
   * 打开指定ID的文章或文章中心
   * @param id 文章的ID
   * @param player 要打开文章的玩家
   */
  static openArticle(id: string, player: Player) {
    const str = id.replace(":", ".");
    player.runCommandAsync(`scriptevent grindstone:openArticle.${str}`);
  }
}
