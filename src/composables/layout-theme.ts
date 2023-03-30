import { layoutThemeConfig } from '@/config/layout-theme'
// 组合式函数，创建全局state，持久化到localStorage
const useLayoutTheme = createGlobalState(() => {
  return useStorage('layout-theme', layoutThemeConfig)
})

export { useLayoutTheme }
