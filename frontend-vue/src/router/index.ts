import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:()=>import('../views/HomePage/index.vue')
  },
  {
    path: '/struct-data',
    component:()=>import('../views/StructData/index.vue')
  },
  {
    path:'/data-analysis',
    component:()=>import('../views/DataAnalysis/index.vue')
  },{
    path:'/document',
    component:()=>import('../views/Document/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})

export default router
