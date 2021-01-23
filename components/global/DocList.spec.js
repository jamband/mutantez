import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import DocList from './DocList'
import ContentLoading from '~/components/ContentLoading'

const factory = ({ props, data, fetchState }) => {
  return shallowMount(DocList, {
    propsData: props,
    data,
    stubs: {
      'nuxt-link': RouterLinkStub,
      ContentLoading
    },
    mocks: {
      $fetchState: fetchState
    }
  })
}

test('fetchState.pending: true', () => {
  const wrapper = factory({
    props: {
      theme: 'foo'
    },
    fetchState: {
      pending: true
    }
  })
  expect(wrapper.text()).toBe('ドキュメントのリストを読み込んでいます...')
})

test('fetchState.error: true', () => {
  const wrapper = factory({
    props: {
      theme: 'foo'
    },
    fetchState: {
      error: true
    }
  })
  expect(wrapper.text()).toBe('ドキュメントのリストの読み込みに失敗しました。')
})

test('fetchState.pending: false', () => {
  const docs = [
    { title: 'Title1', slug: 'title1', path: '/docs/foo/title1' },
    { title: 'Title2', slug: 'title2', path: '/docs/foo/title2' },
    { title: 'Title3', slug: 'title3', path: '/docs/foo/title3' }
  ]
  const wrapper = factory({
    props: {
      theme: 'foo'
    },
    data () {
      return {
        docs
      }
    },
    fetchState: {
      pending: false
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
