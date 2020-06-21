import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ListArticles from '~/components/ListArticles'

const factory = (props = {}) => {
  return shallowMount(ListArticles, {
    propsData: props,
    stubs: {
      'nuxt-link': RouterLinkStub
    },
    mocks: {
      $format: {
        date: jest.fn()
      }
    }
  })
}

const docs = [
  { title: 'Title1', slug: 'title1', path: '/articles/title1', date: '2020-01-01T00:00:00.000Z' },
  { title: 'Title2', slug: 'title2', path: '/articles/title2', date: '2020-01-02T00:00:00.000Z' },
  { title: 'Title3', slug: 'title3', path: '/articles/title3', date: '2020-01-03T00:00:00.000Z' }
]

test('elements', () => {
  const wrapper = factory({ docs })
  const li = wrapper.findAll('li')
  expect(li.length).toBe(3)
  expect(li.at(0).text()).toContain(docs[0].title)
  expect(li.at(0).find('a').props().to).toBe(docs[0].path)
  expect(li.at(1).text()).toContain(docs[1].title)
  expect(li.at(1).find('a').props().to).toBe(docs[1].path)
  expect(li.at(2).text()).toContain(docs[2].title)
  expect(li.at(2).find('a').props().to).toBe(docs[2].path)
})
