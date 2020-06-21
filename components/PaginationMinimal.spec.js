import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import PaginationMinimal from '~/components/PaginationMinimal'

const factory = (props = {}) => {
  return shallowMount(PaginationMinimal, {
    propsData: props,
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

test('{ prev: null, next: null }', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.length).toBe(0)
})

test('{ prev: something, next: null }', () => {
  const wrapper = factory({
    prev: {
      title: 'Prev',
      path: '/to/prev'
    }
  })
  const a = wrapper.findAll('a')
  expect(a.length).toBe(1)
  expect(a.at(0).props().to).toBe('/to/prev')
  expect(a.at(0).text()).toBe('← Prev')
})

test('{ prev: null, next: something }', () => {
  const wrapper = factory({
    next: {
      title: 'Next',
      path: '/to/next'
    }
  })
  const a = wrapper.findAll('a')
  expect(a.length).toBe(1)
  expect(a.at(0).props().to).toBe('/to/next')
  expect(a.at(0).text()).toBe('Next →')
})

test('{ prev: something, next: something }', () => {
  const wrapper = factory({
    prev: {
      title: 'Prev',
      path: '/to/prev'
    },
    next: {
      title: 'Next',
      path: '/to/next'
    }
  })
  const a = wrapper.findAll('a')
  expect(a.length).toBe(2)
  expect(a.at(0).props().to).toBe('/to/prev')
  expect(a.at(0).text()).toBe('← Prev')
  expect(a.at(1).props().to).toBe('/to/next')
  expect(a.at(1).text()).toBe('Next →')
})
