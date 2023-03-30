<script setup lang="ts"></script>

<template>
  <n-config-provider>
    <app-provider>
      <!-- 路由视图，路由切换展示组件的地方 -->
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
