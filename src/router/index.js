import Vue from 'vue'
import VueRouter from 'vue-router'
import Suo from '../views/suo.vue'
import Mine from '../views/mine.vue'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'suo',
    component: Suo
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
