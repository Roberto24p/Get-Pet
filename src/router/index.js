import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import Home from '@/views/Home.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/perfil',
    component: Profile,
    name: 'Profile',
    meta: { requireAuth: true}
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  // Usamos to para verificar si requiera autenticación
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  // Procedemos a verificar el token
  if (protectedRoute && store.state.token === null) {
    next({name: 'Home'})
  } else {
    next()
  }
})
export default router
