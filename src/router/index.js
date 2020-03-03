import Vue from 'vue'
import VueRouter from 'vue-router'
import Servicios from '../views/Servicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/Tecnologias',
    name: 'Tecnologias',
    component: () => import(/* webpackChunkName: "tecnologias" */ '../views/Tecnologias.vue')
  },
  {
    path: '/notas',
    name: 'notas',
    component: () => import(/* webpackChunkName: "notas" */ '../views/Notas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
