import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: () => import('../views/Portada.vue')
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/portada',
    redirect: '/'
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: () => import('../views/SobreMi.vue'),
    alias: '/acerca'
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue'),
    alias: '/contactame'
  },
  {
    path: '/post/:entrada',
    name: 'Articulo',
    component: () => import('../views/Articulo.vue')
  },
  {
    path: '/administrador/:entrada',
    name: 'Administrador',
    component: () => import('../views/Administrador.vue')
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
