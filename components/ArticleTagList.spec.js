import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ArticleTagList from '~/components/ArticleTagList'

const tags = [
  'foo',
  'bar',
  'baz'
]

const factory = () => {
  return shallowMount(ArticleTagList, {
    data () {
      return {
        tags
      }
    },
    stubs: {
      'nuxt-link': RouterLinkStub
    }
  })
}

test('route and test', () => {
  const a = factory().findAll('a')
  for (const [i, tag] of Object.entries(tags)) {
    expect(a.at(i).props().to).toEqual({ name: 'articles-tags-slug', params: { slug: tag } })
    expect(a.at(i).text()).toBe(tag)
  }
})
