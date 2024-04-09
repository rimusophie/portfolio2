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
      // 職務経歴詳細画面
      path: '/JobCareerDetail',
      name: 'JobCareerDetail',
      component: () => import('@/views/JobCareerDetailView.vue')
    },
    {
      // 職務経歴追加画面
      path: '/JobCareerAdd',
      name: 'JobCareerAdd',
      component: () => import('@/views/JobCareerAddView.vue')
    },
    {
      // 職務経歴変更画面
      path: '/JobCareerEdit',
      name: 'JobCareerEdit',
      component: () => import('@/views/JobCareerEditView.vue')
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
      // スキル追加画面
      path: '/SkillAdd',
      name: 'SkillAdd',
      component: () => import('@/views/SkillAddView.vue')
    },
    {
      // スキル変更画面
      path: '/SkillEdit/:id',
      name: 'SkillEdit',
      component: () => import('@/views/SkillEditView.vue')
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
