import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ArticleList from './ArticleList'

const factory = ({ props }) => {
  return shallowMount(ArticleList, {
    propsData: props,
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

const articles = [
  { title: 'Title1', slug: 'title1', path: '/articles/title1', date: '2020-01-01T00:00:00.000Z' },
  { title: 'Title2', slug: 'title2', path: '/articles/title2', date: '2020-01-02T00:00:00.000Z' },
  { title: 'Title3', slug: 'title3', path: '/articles/title3', date: '2020-01-03T00:00:00.000Z' }
]

test('elements', () => {
  const wrapper = factory({
    props: {
      articles
    }
  })
  const li = wrapper.findAll('li')
  expect(li.length).toBe(3)
  for (const i in articles) {
    expect(li.at(i).text()).toContain(articles[i].title)
    expect(li.at(i).find('a').props().to).toBe(articles[i].path)
  }
})
