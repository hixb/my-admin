<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { NLayout } from 'naive-ui'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sider from './components/Layout/Sider'
</script>

<template>
  <NLayout h-100vh>
    <Header />
    <NLayout bottom-64px has-sider position="absolute" style="top: 64px; bottom: 64px" top-64px>
      <Sider />
      <NLayout :native-scrollbar="false" content-style="padding: 24px;">
        <RouterView />
      </NLayout>
    </NLayout>
    <Footer />
  </NLayout>
</template>

<style scoped></style>
