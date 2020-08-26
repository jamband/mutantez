import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ArticleList from '~/components/ArticleList'

const factory = ({ props }) => {
  return shallowMount(ArticleList, {
    propsData: props,
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

const docs = [
  { title: 'Title1', slug: 'title1', path: '/articles/title1', date: '2020-01-01T00:00:00.000Z' },
  { title: 'Title2', slug: 'title2', path: '/articles/title2', date: '2020-01-02T00:00:00.000Z' },
  { title: 'Title3', slug: 'title3', path: '/articles/title3', date: '2020-01-03T00:00:00.000Z' }
]

test('elements', () => {
  const wrapper = factory({
    props: {
      docs
    }
  })
  const li = wrapper.findAll('li')
  expect(li.length).toBe(3)
  for (const i in docs) {
    expect(li.at(i).text()).toContain(docs[i].title)
    expect(li.at(i).find('a').props().to).toBe(docs[i].path)
  }
})
