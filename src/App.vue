<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { NLayout, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
</script>

<template>
  <NLayout h-100vh>
    <NLayoutHeader bordered h-64px p-24px>
      颐和园路
    </NLayoutHeader>
    <NLayout bottom-64px has-sider position="absolute" style="top: 64px; bottom: 64px" top-64px>
      <NLayoutSider
        :native-scrollbar="false"
        bordered
        content-style="padding: 24px;"
      />
      <NLayout :native-scrollbar="false" content-style="padding: 24px;">
        <RouterView />
      </NLayout>
    </NLayout>
    <NLayoutFooter
      bordered
      position="absolute"
      style="height: 64px; padding: 24px"
    >
      城府路
    </NLayoutFooter>
  </NLayout>
</template>

<style scoped></style>
