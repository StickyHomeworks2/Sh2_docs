/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '文档',
    icon: 'mi:book',
    items: [
      { text: '指南', icon: 'line-md:compass-twotone', link: '/doc/guide/' },
    ],
  },
  {
    text: '常见问题',
    icon: 'mingcute:question-line',
    link: '/faq/',
  },
  { text: '友链', icon: 'ic:round-people', link: '/friends' },
])
