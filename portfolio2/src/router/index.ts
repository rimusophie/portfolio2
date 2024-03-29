import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import JobCareerListViewVue from '@/views/JobCareerListView.vue'
//import SkillListViewVue from '@/views/SkillListView.vue'
//import PortfolioListViewVue from '@/views/PortfolioListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/JobCareerListView.vue')
    },
    {
      path: '/JobCareerList',
      name: 'JobCareerList',
      component: () => import('@/views/JobCareerListView.vue')
    },
    {
      path: '/SkillList',
      name: 'SkillList',
      component: () => import('@/views/SkillListView.vue')
    },
    {
      path: '/PortfolioList',
      name: 'PortfolioList',
      component: () => import('@/views/PortfolioListView.vue')
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
