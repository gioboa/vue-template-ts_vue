import type { Routers } from './model'

const RouterName: Routers = {
  example: {
    path: '/inicio',
    name: 'inicio',
  },
  notFound: {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
  },
}

export default RouterName
