import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from '../views/Portada'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: Portada
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: () => import('../views/SobreMi.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/post/:entrada',
    name: 'Articulo',
    component: () => import('../views/Articulo.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
