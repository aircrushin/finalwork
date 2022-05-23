import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import about from '../views/about.vue'
import Main from '../views/Main.vue'

const routes = [
  {
    path:'/',
    name:'welcome',
    component: Welcome
  },
  {
    path:'/about',
    name:'about',
    component: about
  },
  {
    path:'/main',
    name:'main',
    component: Main
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
