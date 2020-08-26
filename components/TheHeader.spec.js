import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader'
import { APP_NAME } from '~/plugins/constants'

const factory = () => {
  return shallowMount(TheHeader, {
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

test('links', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.at(0).text()).toBe(APP_NAME)
  expect(a.at(0).props().to).toEqual({ name: 'index' })
})
