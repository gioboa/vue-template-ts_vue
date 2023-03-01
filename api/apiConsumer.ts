import { ApiRouter } from './api'
import type { ApiRouterConsumerInterface } from './model/apiConsumer.interface'

const baseURL = 'https://api.voltkforum.com.br/api/front_end/'

export const Endpoint: ApiRouterConsumerInterface = {
  example: {
    x: new ApiRouter({
      baseURL,
      routerOrigin: '',
    }),
  },
}
