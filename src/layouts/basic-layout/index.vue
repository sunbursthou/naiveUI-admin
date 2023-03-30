<template>
  <!-- mobile layout -->
  <mobile-layout
    v-if="isMobile"
    :logo="layout.logo"
    :title="layout.title"
    :footer="layout.footer"
    v-model:drawerVisible="drawerVisible"
  >
    <template #headerRight> test right slot </template>

    <router-view />
  </mobile-layout>

  <template v-else>
    <!-- mix layout -->
    <mix-layout
      :logo="layout.logo"
      :title="layout.title"
      :footer="layout.footer"
      :siderWidth="layout.siderWidth"
      :siderCollapsedWidth="layout.siderCollapsedWidth"
      :showSiderTrigger="layout.showSiderTrigger"
      v-model:collapsed="layout.collapsed"
      v-if="layout.layout === 'mix'"
    >
      <template #headerRight> test right slot </template>
    </mix-layout>
    <!-- side layout -->
    <side-layout
      :logo="layout.logo"
      :title="layout.title"
      :footer="layout.footer"
      :siderWidth="layout.siderWidth"
      :siderCollapsedWidth="layout.siderCollapsedWidth"
      :showSiderTrigger="layout.showSiderTrigger"
      v-model:collapsed="layout.collapsed"
      v-if="layout.layout === 'side'"
    >
      <template #headerRight> <div>test right slot</div> </template>
    </side-layout>
    <!-- top layout -->
    <top-layout
      :logo="layout.logo"
      :title="layout.title"
      :footer="layout.footer"
      v-if="layout.layout === 'top'"
    >
      <template #headerRight> test right slot </template>
    </top-layout>
    <router-view />
  </template>

  <LayoutSetting />
</template>

<script setup lang="ts">
import { useLayoutBreakpoints } from '@/composables/layout-breakout'
import { useAppStore } from '@/store/app'
import { LayoutSetting } from '../common'
import MixLayout from '../mix-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
const { isMobile, isPad, isDesktop } = useLayoutBreakpoints()
const appStore = useAppStore()
// storeToRefs，从pinia中直接解构数据会失去响应式，使用storeToRefs保值解构出来仍然是响应式数据
const { layout, drawerVisible } = storeToRefs(appStore)
// 注意顺序，需要先引入isPad等，然后再使用
watchEffect(() => {
  if (isPad.value) {
    appStore.toggleCollapsed(true)
  } else if (isDesktop.value) {
    appStore.toggleCollapsed(false)
  }
  if (isMobile.value) {
    appStore.toggleDrawerVisible(false)
  }
})
</script>

<style scoped></style>
