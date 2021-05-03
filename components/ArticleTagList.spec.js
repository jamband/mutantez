import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ArticleTagList from './ArticleTagList'

const factory = ({ props }) => {
  return shallowMount(ArticleTagList, {
    propsData: props,
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

const tags = ['foo', 'bar', 'baz']

test('route and text', () => {
  const wrapper = factory({
    props: {
      tags
    }
  })
  const a = wrapper.findAll('a')
  expect(a.length).toBe(3)
  for (const [i, tag] of Object.entries(tags)) {
    expect(a.at(i).props().to).toEqual({ name: 'articles-tags-slug', params: { slug: tag } })
    expect(a.at(i).text()).toBe(tag)
  }
})
