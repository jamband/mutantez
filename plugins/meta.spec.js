import { description } from '~/plugins/meta'

const node1 = { type: 'root', children: [{ type: 'element', tag: 'p', props: {}, children: [{ type: 'text', value: 'body1' }] }] }
const node2 = { type: 'root', children: [{ type: 'element', tag: 'h2', props: { id: 'header2' }, children: [{ type: 'element', tag: 'a', props: { ariaHidden: 'true', href: '#header2', tabIndex: -1 }, children: [{ type: 'element', tag: 'span', props: { className: ['icon', 'icon-link'] }, children: [] }] }, { type: 'text', value: 'header2' }] }, { type: 'element', tag: 'p', props: {}, children: [{ type: 'text', value: 'body2' }] }] }

test('description', () => {
  expect(description(node1)).toBe('body1')
  expect(description(node2)).toBe('body2')
})
