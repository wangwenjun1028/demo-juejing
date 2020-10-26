import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import { routes as topicRoutes } from '../topic/router'

Vue.use(VueRouter)

const routes = [
  ...topicRoutes,
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // {
  //   path: "/",
  //   redirect: "/top",
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
