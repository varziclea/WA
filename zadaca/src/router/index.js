import { createRouter, createWebHistory } from 'vue-router'

const routes = [{

  path: '/',
  name: 'Home',
  component: () => import('../views/HomeView.vue')
},

{
  path: "/:sha",
  name: "Detalji",
  component: () => import('../views/DetaljiView.vue'),
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
