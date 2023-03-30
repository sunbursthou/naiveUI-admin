import { BasicLayout } from '@/layouts'
import type { RouteRecordRaw } from 'vue-router'
const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/index.vue')
      },
      {
        path: 'workspace',
        name: 'workspace',
        component: () => import('@/views/workspace/index.vue')
      }
    ]
  }
]

export default staticRouter
