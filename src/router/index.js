import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      header: true,
    },
    component: Home
  },
  {
    path: '/incomes',
    name: 'Incomes',
    meta: {
      header: true,
    },
    component: () => import(/* webpackChunkName: "incomes" */ '../views/Incomes.vue')
  },
  {
    path: '/bills',
    name: 'Bills',
    meta: {
      header: true,
    },
    component: () => import(/* webpackChunkName: "bills" */ '../views/Bills.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.getRoute = (routeName) => {
  return routes.filter((route) => route.name === routeName);
}

export default router
