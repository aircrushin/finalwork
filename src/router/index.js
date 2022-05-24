import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'
import Todo from '../views/Todo.vue'
import Weather from '../views/Weather.vue'
import Random from '../views/Random.vue'
import Dictionary from '../views/Dictionary.vue'
import Game from '../views/Game.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path:'/',
    name:'welcome',
    component: Welcome
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path:'/main',
    name:'main',
    component: Main
  },
  {
    path:'/todo',
    name:'todo',
    component: Todo
  },
  {
    path:'/weather',
    name:'weather',
    component: Weather
  },
  {
    path:'/random',
    name:'random',
    component: Random
  },
  {
    path:'/dictionary',
    name:'dictionary',
    component: Dictionary
  },
  {
    path:'/game',
    name:'game',
    component: Game
  },
  {
    path:'/support',
    name:'support',
    component: Support
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
