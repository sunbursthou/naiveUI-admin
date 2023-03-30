import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // 自定义简写
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(), // 默认是windicss预设
    presetAttributify(),    // class 拆分属性预设
    presetIcons({       // 图标库预设
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({        // 字体预设
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})