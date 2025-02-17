import { defineConfig } from "vitepress";
import { nav } from './nav.mts'
import { sidebar } from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Grindstone Docs",
  description: "A site that have some information about MinecraftBE Addon",
  appearance: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: '/logo.png',
    nav: nav,
    sidebar: sidebar,
    footer: { 
      message: '如无特殊说明，本网站内容采用 CC BY-NC-SA 4.0 协议进行许可', 
    }, 
    darkModeSwitchLabel: '深浅模式', 
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    outline: { 
      level: [2,4],
      label: '当前页导航'
    },
    search: { 
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }, 
    editLink: { 
      pattern: 'https://codeberg.org/grindstone/pages/_edit/source/docs/:path', // 改成自己的仓库
      text: '编辑本页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
  },
  sitemap: {
    hostname: 'https://fanglimao.codeberg.page/addon-encyclopedia',
  },
  base: '/grindstone/'
});