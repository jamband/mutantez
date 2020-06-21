import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'

const $app = {
  name: 'Foo'
}

const factory = () => {
  return shallowMount(TheFooter, {
    stubs: {
      'nuxt-link': RouterLinkStub
    },
    mocks: {
      $app
    }
  })
}

test('text', () => {
  const wrapper = factory()
  expect(wrapper.text()).toContain(`© ${new Date().getFullYear()}`)
  expect(wrapper.find('a').text()).toBe($app.name)
  expect(wrapper.find('a').props().to).toEqual({ name: 'index' })
})
