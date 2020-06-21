import { app } from '~/plugins/app'
import { APP_NAME } from '~/plugins/constants'

test('name', () => {
  expect(app.name).toBe(APP_NAME)
})
