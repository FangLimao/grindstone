import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  tutorials: [
    {
      text: "快速开始",
      link: "/tutorials/start.md"
    },
    {
      text: "核心脚本",
      collapsed: false,
      items: [
        {
          text: "初始化模组",
          link: "/tutorials/core/init.md",
        },
        {
          text: "获取模组信息",
          link: "/tutorials/core/meta.md",
        }
      ]
    }
  ],
  refs: [
    {
      text: "核心脚本",
      link: "/refs/core/globals.md",
      collapsed: true,
      items: [
        {
          text: "Other",
          collapsed: true,
          items: [{ text: "modData", link: "/refs/core/variables/modData.md" }],
        },
        {
          text: "Stable",
          collapsed: true,
          items: [
            {
              text: "ModMetaData",
              link: "/refs/core/interfaces/ModMetaData.md",
            },
            { text: "getModId", link: "/refs/core/functions/getModId.md" },
            { text: "getModName", link: "/refs/core/functions/getModName.md" },
            {
              text: "getModVersion",
              link: "/refs/core/functions/getModVersion.md",
            },
            {
              text: "initializeMod",
              link: "/refs/core/functions/initializeMod.md",
            },
            { text: "setModId", link: "/refs/core/functions/setModId.md" },
            { text: "setModName", link: "/refs/core/functions/setModName.md" },
            {
              text: "setModVersion",
              link: "/refs/core/functions/setModVersion.md",
            },
          ],
        },
      ],
    },
    {
      text: "Common",
      link: "/refs/common/globals.md",
    },
    {
      text: "Utils",
      link: "/refs/utils/globals.md",
    },
    {
      text: "工具包",
      collapsed: false,
      items: [
        {
          text: "@grindstone/article-kit",
          link: "/refs/article-kit/globals.md",
        },
        {
          text: "@grindstone/debugger-kit",
          link: "/refs/debugger-kit/globals.md",
        },
        {
          text: "@grindstone/effect-kit",
          link: "/refs/effect-kit/globals.md",
        },
        {
          text: "@grindstone/entity-kit",
          link: "/refs/entity-kit/globals.md",
        },
        {
          text: "@grindstone/format-kit",
          link: "/refs/format-kit/globals.md",
        },
        {
          text: "@grindstone/item-kit",
          link: "/refs/item-kit/globals.md",
        },
        {
          text: "@grindstone/message-kit",
          link: "/refs/article-kit/globals.md",
        },
        {
          text: "@grindstone/quest-kit",
          link: "/refs/quest-kit/globals.md",
        },
      ],
    },
  ],
  tools: [],
};
