<template>
  <n-layout has-sider class="h-screen">
    <!-- 子传父，通过在子组件定义事件，defineEmits()，定义事件名，
          并通过自定义函数触发事件emit('事件名',params)，同时，在父组件监听子组件定义的时间，
          并设置回调函数，接收传过来的变量 -->
    <layout-sider
      :show-trigger="showSiderTrigger"
      :collapsed-width="siderCollapsedWidth"
      :width="siderWidth"
      :inverted="inverted"
      :collapsed="collapsed"
      @update:collapsed="$emit('update:collapsed', $event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <!-- logo title -->
        <LayoutLogo :src="logo"></LayoutLogo>
        <LayoutTitle v-if="!collapsed" :title="title" size="20" class="truncate"> </LayoutTitle>
      </div>
    </layout-sider>

    <n-layout>
      <n-layout-header
        :style="{ height: headerHeight }"
        class="flex items-center justify-between px-4"
      >
        <slot name="headerLeft"><div></div></slot>
        <slot name="headerRight"> <div></div> </slot>
      </n-layout-header>

      <layout-content :style="{ height: contentHeight }"> 这是side布局平山道 </layout-content>
      <layout-footer :style="{ height: footerHeight }" class="flex items-center justify-center">
        {{ footer }}
      </layout-footer>
    </n-layout>
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
    headerHeight: number
    footerHeight: number
    logo?: string
    title?: string
    footer?: string
    siderWidth: number
    siderCollapsedWidth: number
    showSiderTrigger: boolean | 'bar' | 'arrow-circle'
    collapsed: boolean
    inverted: boolean
  }>(),
  {
    headerHeight: 48,
    footerHeight: 32,
    inverted: false,
    collapsed: false
  }
)
defineEmits(['update:collapsed'])
</script>

<style scoped></style>
