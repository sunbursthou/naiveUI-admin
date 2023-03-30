import { layoutThemeConfig } from '@/config/layout-theme'

const useAppStore = defineStore('app', () => {
  // 开发环境使用自己定义的layout theme config，其他环境使用用户本地持久化的layout theme
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  // unref：如果参数是一个ref，则返回内部值，否则返回参数本身，总之，unref保证返回的是一个值对象，useLayoutTheme()返回的是一个ref
  const layout = reactive(unref(defaultTheme))
  const drawerVisible = ref(false)
  const toggleDrawerVisible = (show: boolean) => {
    drawerVisible.value = show
  }
  const toggleCollapsed = (collapsed: boolean) => {
    layout.collapsed = collapsed
  }
  return {
    layout,
    drawerVisible,
    toggleDrawerVisible,
    toggleCollapsed
  }
})

export { useAppStore }
