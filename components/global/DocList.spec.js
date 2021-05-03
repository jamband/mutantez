import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import DocList from './DocList'

const factory = ({ props, data, fetchState }) => {
  return shallowMount(DocList, {
    propsData: props,
    data,
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

const docs = [
  { title: 'Title1', slug: 'title1', path: '/docs/foo/title1' },
  { title: 'Title2', slug: 'title2', path: '/docs/foo/title2' },
  { title: 'Title3', slug: 'title3', path: '/docs/foo/title3' }
]

test('elements', () => {
  const wrapper = factory({
    props: {
      theme: 'foo'
    },
    data () {
      return {
        docs
      }
    }
  })
  wrapper.setData({ docs })
  const li = wrapper.findAll('li')
  expect(li.length).toBe(3)
  for (const i in docs) {
    expect(li.at(i).text()).toContain(docs[i].title)
    expect(li.at(i).find('a').props().to).toBe(docs[i].path)
  }
})
