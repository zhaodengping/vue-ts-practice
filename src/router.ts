import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: '/login',
      children: [
        { path: "/login", component: resolve => require(['./views/common/login.vue'], resolve) }
      ]
    },
    //代理商管理
    { path: "/temAccount", component: resolve => require(['./views/agent/tempAccount.vue'], resolve) },
    { path: "/uncheckAgent", component: resolve => require(['./views/agent/uncheckAgent.vue'], resolve) },
    { path: "/agentList", component: resolve => require(['./views/agent/agentList.vue'], resolve) },
    //产品管理
    { path: "/record", component: resolve => require(['./views/product/record.vue'], resolve) },
  ]
})