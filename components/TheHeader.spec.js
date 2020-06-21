import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader'

const $app = {
  name: 'Foo'
}

const factory = () => {
  return shallowMount(TheHeader, {
    stubs: {
      'nuxt-link': RouterLinkStub
    },
    mocks: {
      $app
    }
  })
}

test('links', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.at(0).text()).toBe($app.name)
  expect(a.at(0).props().to).toEqual({ name: 'index' })
})
