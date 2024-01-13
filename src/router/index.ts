import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => '/about'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Resume/ResumeView.vue')
    }
  ]
})

export default router
