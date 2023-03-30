import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
// 解决潜在的样式冲突
// https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.use(createPinia())
app.use(router)

app.mount('#app')
