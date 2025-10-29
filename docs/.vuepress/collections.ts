/* @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。 */

import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const Docs = defineCollection({
  type: 'doc',
  dir: 'docs',
  linkPrefix: '/docs',
  title: '文档',
  sidebar: [ 'index', { text: '指南', prefix: '/docs/guide/', items: ['', 'subject', 'tag', 'use', 'title', 'color']},{ text: '帮助我们', prefix: '/docs/help/', items: ['issues','help-github'] } ],
});

const Faq = defineCollection({
  type: 'post',
  dir: 'faq',
  title: '常见问题',
  link: '/faq/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  tags: false, // 是否启用标签页
  archives: false, // 是否启用归档页
  categories: false, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

export default defineCollections([
  Docs,
  Faq
])
