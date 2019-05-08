import Vue from 'vue'
import routes from 'vue-auto-routing'
import Router from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const routerLayout = createRouterLayout((layout) => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  routes: [
    {
      path: '/',
      component: routerLayout,
      children: routes,
    },
  ],
})
