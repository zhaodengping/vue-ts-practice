import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/', redirect: '/login',
  },
  { path: "/login", component: resolve => require(['./views/common/login.vue'], resolve) },
  {
    path: "/",
    component: resolve => require(['./components/main.vue'], resolve),
    children: [
      //代理商管理
      { path: "/temAccount", component: resolve => require(['./views/agent/tempAccount.vue'], resolve) },
      { path: "/uncheckAgent", component: resolve => require(['./views/agent/uncheckAgent.vue'], resolve) },
      { path: "/agentList", component: resolve => require(['./views/agent/agentList.vue'], resolve) },
      { path: "/agentDeatil", component: resolve => require(['./views/agent/agentDetail.vue'], resolve) },
      //产品管理
      { path: "/record", component: resolve => require(['./views/product/record.vue'], resolve) },
      //库存管理
      {path:"/storageDetail",component:resolve=>require(['./views/storage/storageDetail.vue'],resolve)},
      {path:"/priceManage",component:resolve=>require(['./views/storage/priceManage.vue'],resolve)},
      {path:"/outManage",component:resolve=>require(['./views/storage/outManage.vue'],resolve)},
      {path:"/inManage",component:resolve=>require(['./views/storage/inManage.vue'],resolve)},
      {path:"/checkNumber",component:resolve=>require(['./views/storage/checkNumber.vue'],resolve)},
    ]
  }
  ]
})