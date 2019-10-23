import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Discovery = () => import("../view/discovery/Discovery")

const routes = [
  { path: '/' ,redirect: '/discovery'},
  { path: '/discovery' ,component: Discovery},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
