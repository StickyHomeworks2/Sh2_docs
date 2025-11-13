import { defineClientConfig } from 'vuepress/client'
import Layout from './theme/components/Layout.vue'
import Contributors from './theme/components/Contributors.vue'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    app.component('Contributors', Contributors)
  },
  layouts: {
    Layout,
  },
})