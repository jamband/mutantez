import { APP_NAME } from '~/plugins/constants'

export const app = {
  name: APP_NAME
}

export default (_, inject) => {
  inject('app', app)
}
