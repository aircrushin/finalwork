import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'


const routes = [
  {
    path:'/',
    name:'welcome',
    component: Welcome
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
