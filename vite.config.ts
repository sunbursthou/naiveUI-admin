import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      // 配置需要自动导入的库
      imports: [
        'vue',
        // 'vue/macros',  // 响应性语法糖
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        'pinia',
        {
          // 四大全局组件
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      // 生成到的地址
      dts: 'types/auto-imports.d.ts',
      // 配置本地需要自动导入的库
      dirs: [
        // pinia状态管理目录
        'src/stores',
        // 自定义组合式api目录
        'src/composables',
      ],
      // 生成.eslintrc-auto-import.json文件，生成后记得改为false
      eslintrc:{
        enabled:false,
      }
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // 导入naiveui的配置项目
      resolvers: [NaiveUiResolver()],
      
      /**
     * Relative paths to the directory to search for components.
     * @default 'src/components'
     */
      // 自动导入的地址默认就是src/components
      dirs:'src/components',
      // 生成类型的地址
      dts: 'types/components.d.ts',
      
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
  resolve: {
    alias: {
      // alias @ = ./src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
