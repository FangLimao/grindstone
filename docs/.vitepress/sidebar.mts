import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  tutorials: [
  ],
  refs: [
    {
      text: "Core",
      link: "/refs/core/globals.md"
    },
    {
      text: "Common",
      link: "/refs/common/globals.md"
    },
    {
      text: "Utils",
      link: "/refs/utils/globals.md"
    },
    {
      text: "工具包",
      collapsed: false,
      items: [
        {
          text: "@grindstone/article-kit",
          link: "/refs/article-kit/globals.md"
        },
        {
          text: "@grindstone/debugger-kit",
          link: "/refs/debugger-kit/globals.md"
        },
        {
          text: "@grindstone/effect-kit",
          link: "/refs/effect-kit/globals.md"
        },
        {
          text: "@grindstone/entity-kit",
          link: "/refs/entity-kit/globals.md"
        },
        {
          text: "@grindstone/format-kit",
          link: "/refs/format/globals.md"
        },
        {
          text: "@grindstone/item-kit",
          link: "/refs/item-kit/globals.md"
        },
        {
          text: "@grindstone/message-kit",
          link: "/refs/article-kit/globals.md"
        },
        {
          text: "@grindstone/quest-kit",
          link: "/refs/quest-kit/globals.md"
        }
      ]
    }
  ],
  tools: [],
};
