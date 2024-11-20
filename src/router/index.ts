import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projectso',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: h('p', { style: 'color: red' }, '404 Not Found')
    },
    {
      path: '/projects:catchAll(.*)*',
      name: 'project-not-found',
      component: h('h1', { style: 'color: red' }, '404 Project Not Found')
    }
  ]
})

export default router
