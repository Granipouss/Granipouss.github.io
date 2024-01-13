import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/Home/HomeView.vue'
import ResumeViewVue from '@/views/Resume/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => '/about',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: '/about',
      name: 'about',
      component: ResumeViewVue,
    },
  ],
})

export default router
