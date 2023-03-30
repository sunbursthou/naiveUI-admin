import { createRouter, createWebHistory } from 'vue-router'
import staticRouter from './static-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
  routes: [...staticRouter]
})

export default router
