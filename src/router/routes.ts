import {RouteConfig} from 'vue-router'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {path: '', component: () => import('@/pages/index.vue')},
    ],
  },
]

// Always leave this as last one
if(process.env.MODE !== 'ssr'){
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
