import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/reNamePassword',
    name: 'reNamePassword',
    component: () => import('../views/reNamePassword.vue')
  },
  {
    path: '/RigstSelfMessage',
    name: 'RigstSelfMessage',
    component: () => import( '../views/RigstSelfMessage/RigstSelfMessage.vue')
  },
  {
    path: '/Storey',
    name: 'Storey',
    component: () => import( '../views/RigstSelfMessage/Storey.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
