<template>
  <n-layout class="h-screen">
    <n-layout-header
      :inverted="headerInverted"
      :style="{ height: headerHeight }"
      class="flex items-center justify-between px-4"
    >
      <div class="flex items-center">
        <!-- logo title -->
        <LayoutLogo :src="logo"></LayoutLogo>
        <n-icon @click="onShow" size="24" class="ml-2"> <MenuFoldOutlined /> </n-icon>
      </div>
      <div><slot name="headerRight"></slot></div>
    </n-layout-header>

    <LayoutContent :style="{ height: contentHeight }">
      <!-- 内容部分 -->
      content 这是手机布局
    </LayoutContent>

    <layout-footer :style="{ height: footerHeight }" class="flex items-center justify-center">
      {{ footer }}
    </layout-footer>
    <!-- drawer -->
    <n-drawer
      @update:show="(show) => $emit('update:drawerVisible', show)"
      :show="drawerVisible"
      placement="left"
      width="240"
    >
      <n-drawer-content body-content-style="padding: 0">
        <n-layout>
          <n-layout-header inverted class="h-screen">
            <div class="flex items-center justify-center py-12px">
              <!-- logo title -->
              <LayoutLogo :src="logo"></LayoutLogo>
              <LayoutTitle :title="title" size="20"> </LayoutTitle>
            </div>
          </n-layout-header>
        </n-layout>
      </n-drawer-content>
    </n-drawer>
  </n-layout>
</template>

<script setup lang="ts">
import { MenuFoldOutlined } from '@vicons/antd'
import { LayoutContent, LayoutFooter, LayoutLogo, LayoutTitle } from '../common'
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
    headerInverted?: boolean
    drawerInverted?: boolean
    drawerVisible: boolean
  }>(),
  {
    headerHeight: 48,
    footerHeight: 32,
    headerInverted: false,
    drawerInverted: false,
    drawerVisible: false
  }
)
const emit = defineEmits(['update:drawerVisible'])
const onShow = () => {
  emit('update:drawerVisible', true)
}
</script>

<style scoped></style>
