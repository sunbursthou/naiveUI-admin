<template>
  <n-layout class="h-screen">
    <n-layout-header
      :inverted="inverted"
      :style="{ height: headerHeight }"
      class="flex items-center justify-between px-4"
    >
      <div class="flex items-center">
        <!-- logo title -->
        <LayoutLogo :src="logo"></LayoutLogo>
        <LayoutTitle :title="title"> </LayoutTitle>
      </div>
      <div><slot name="headerRight"></slot></div>
    </n-layout-header>

    <LayoutContent :style="{ height: contentHeight }">
      <!-- 内容部分 -->
      content
    </LayoutContent>

    <layout-footer :style="{ height: footerHeight }" class="flex items-center justify-center">
      {{ footer }}
    </layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { LayoutContent, LayoutLogo, LayoutTitle } from '../common'

const headerHeight = computed(() => `${layoutProps.headerHeight}px`)
const contentHeight = computed(
  () => `calc(100vh - ${layoutProps.headerHeight + layoutProps.footerHeight}px)`
)
const footerHeight = computed(() => `${layoutProps.footerHeight}px`)
const layoutProps = withDefaults(
  defineProps<{
    headerHeight: number
    footerHeight: number
    logo?: string
    title?: string
    footer?: string
    inverted: boolean
  }>(),
  {
    headerHeight: 48,
    footerHeight: 32,
    inverted: false
  }
)
defineEmits(['update:collapsed'])
</script>

<style scoped></style>
