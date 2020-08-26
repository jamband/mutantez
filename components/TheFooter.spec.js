import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'
import { APP_NAME } from '~/plugins/constants'

const factory = () => {
  return shallowMount(TheFooter, {
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

test('text', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.at(0).text()).toBe('Contact')
  expect(a.at(0).props().to).toEqual({ name: 'contact' })
  expect(a.at(1).text()).toBe('About')
  expect(a.at(1).props().to).toEqual({ name: 'about' })
  expect(wrapper.text()).toContain(`© ${new Date().getFullYear()} ${APP_NAME}`)
})
