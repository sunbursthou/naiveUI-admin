<template>
  <n-layout class="h-screen">
    <n-layout-header
      inverted
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

    <n-layout has-sider :style="{ height: contentHeight }">
      <!--  -->
      <LayoutSider
        :show-trigger="showSiderTrigger"
        :collapsed-width="siderCollapsedWidth"
        :width="siderWidth"
        :collapsed="collapsed"
        @update:collapsed="$emit('update:collapsed', $event)"
        >哈佛静安寺of纳斯欧诺法
        {{ collapsed }}
      </LayoutSider>

      <LayoutContent>
        <!-- 内容部分 -->
        content 这是mix布局
      </LayoutContent>
    </n-layout>

    <layout-footer :style="{ height: footerHeight }" class="flex items-center justify-center">
      {{ footer }}
    </layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { LayoutContent, LayoutFooter, LayoutLogo, LayoutSider, LayoutTitle } from '../common'

const headerHeight = computed(() => `${layoutProps.headerHeight}px`)
const contentHeight = computed(
  () => `calc(100vh - ${layoutProps.headerHeight + layoutProps.footerHeight}px)`
)
const footerHeight = computed(() => `${layoutProps.footerHeight}px`)
const layoutProps = withDefaults(
  defineProps<{
    headerHeight?: number
    footerHeight?: number
    logo?: string
    title?: string
    footer?: string
    siderWidth: number
    siderCollapsedWidth: number
    showSiderTrigger: boolean | 'bar' | 'arrow-circle'
    collapsed: boolean
  }>(),
  {
    headerHeight: 48,
    footerHeight: 32,
    collapsed: false
  }
)
defineEmits(['update:collapsed'])
</script>

<style scoped></style>
