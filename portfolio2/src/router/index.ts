import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // トップページ
      path: '/',
      name: 'root',
      component: () => import('@/views/JobCareerListView.vue')
    },
    {
      // 職務経歴一覧画面
      path: '/JobCareerList',
      name: 'JobCareerList',
      component: () => import('@/views/JobCareerListView.vue')
    },
    {
      // スキル一覧画面
      path: '/SkillList',
      name: 'SkillList',
      component: () => import('@/views/SkillListView.vue')
    },
    {
      // スキル詳細画面
      path: '/SkillDetail/:id',
      name: 'SkillDetail',
      component: () => import('@/views/SkillDetailView.vue')
    },
    {
      // ポートフォリオ一覧画面
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
