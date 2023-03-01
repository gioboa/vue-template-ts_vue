import { createRouter, createWebHistory } from 'vue-router'
import RouterName from './RouterName'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: RouterName.example.path,
    },
    {
      path: RouterName.example.path,
      name: RouterName.example.name,
      component: () => import('../pages/Home/Home.vue'),
    },
    {
      path: RouterName.notFound.path,
      name: RouterName.notFound.name,
      redirect: RouterName.example.path,
    },
  ],
})

export default router
