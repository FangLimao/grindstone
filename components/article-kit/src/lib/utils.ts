import { Player, RawMessage } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { Article, ArticleText } from "./core";

/**
 * 根据提供的资源生成文章文本
 * @param reader 阅读者
 * @param text 原始的文本资源
 * @returns
 */
export function generateArticleText(
  reader: Player,
  text: ArticleText
): string | RawMessage {
  if (typeof text === "string") return text;
  if (typeof text === "function") return text(reader);
  return text;
}

/**
 * 根据提供的资源生成目录表单
 * @param player 
 * @param rawTitle 
 * @param rawBody 
 * @param articles 
 * @returns 
 */
export function generateContentForm(
  player: Player,
  rawTitle: ArticleText,
  rawBody: ArticleText,
  articles: Article[]
): { form: ActionFormData; list: Article[] } | undefined {
  let unlockedArticles: Article[] = [];
  const [title, body] = [
    generateArticleText(player, rawTitle),
    generateArticleText(player, rawBody),
  ];
  const contentForm = new ActionFormData().title(title).body(body);
  articles.forEach((article) => {
    if (!article.checkUnlock(player)) return;
    const title = generateArticleText(player, article.title);
    contentForm.button(title, article.iconPath);
    unlockedArticles.push(article);
  });
  if (unlockedArticles.length === 0) {
    return;
  }
  return { form: contentForm, list: unlockedArticles };
}
