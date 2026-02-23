import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "HomePage" */ '../views/home/HomePage.vue'),
    },
    {
      path: '/typing/:language/:id',
      name: 'Typeing',
      component: () => import(/* webpackChunkName: "TypeMoudle" */ '../views/typeing/Typeing.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
