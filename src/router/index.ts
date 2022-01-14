import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import InboxPage from '../views/InboxPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path:'/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'scan',
        component: () => import('@/views/ScanPage.vue')
      },
      {
        path: 'inbox',
        // component: () => import('@/views/InboxPage.vue')
        component: InboxPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
