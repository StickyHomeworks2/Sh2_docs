<script setup>
import { Layout } from 'vuepress-theme-plume/client'
import AsideNav from './AsideNav.vue'
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <AsideNav />
    </template>
  </Layout>
</template>

<style>
</style>