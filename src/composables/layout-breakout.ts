// 参考bootstrap
const breakpointsEnum = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

// 我们希望导出去的api能够直接对当前窗口的断点值进行判断，所以，我们定义一个函数来进行判断并返回
const useLayoutBreakpoints = () => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum))
  const isMobile = breakpoints.smallerOrEqual('md')
  const isPad = breakpoints.between('md', 'lg')
  const isDesktop = breakpoints.greaterOrEqual('lg')
  return {
    isMobile,
    isPad,
    isDesktop,
    breakpoints
  }
}

export { useLayoutBreakpoints }
