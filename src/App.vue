<script lang="ts" setup>
import Header from './components/Layout/Header'
import Sider from './components/Layout/Sider'
</script>

<template>
  <div flex items-senter>
    <Sider />
    <div class="w-[calc(100%-272px)] p-20px">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
