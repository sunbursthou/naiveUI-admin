import logo from '@/assets/vue.svg'
// 布局数据类型
interface LayoutTheme {
  title?: string // 标题
  layout: 'mix' | 'side' | 'top' // 布局类型
  layoutStyle: 'inverted' | 'light' | 'dark'
  headerHeight: number
  logo?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
  collapsed: boolean
  theme: string
  footer?: string
}
const layoutThemeConfig: LayoutTheme = {
  title: 'Sunburst Admin', // 后台标题
  layout: 'mix', // 后台布局
  layoutStyle: 'light', // 主题色
  headerHeight: 48, // header高度
  logo,
  siderWidth: 240, // 侧边栏宽度
  siderCollapsedWidth: 48, //侧边栏收起时的宽度
  showSiderTrigger: 'bar', // 侧边栏收起trigger
  collapsed: false, // 是否默认收起
  theme: 'default', // 主题
  footer: '@Sunburst'
}

export { layoutThemeConfig }
