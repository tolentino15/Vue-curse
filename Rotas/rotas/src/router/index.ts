import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sobre.vue')
    },
    {
      path: '/restrito',
      name: 'restrito',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Restrito.vue'),
      meta:{autenticar:true}
    }
  ]
})

// Função para privar rotas
router.beforeEach((to, from, next) => {

  // Condicional 
  if(to.matched.some(record => record.meta.autenticar)){

    if(localStorage.getItem('nome') === null) {
      next({
        path: '/',
        query: { redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }

});

export default router
