import { firstCreated, lastUpdated } from '~/plugins/doc'

const path1 = `${process.cwd()}/content/docs/nuxt-content/conclusion.md`
const path2 = '/path/to/foo.md'

test('firstCreated', () => {
  expect(firstCreated(path1).toString()).toMatch(/^[0-9]+$/)
  expect(firstCreated(path2)).toBe(undefined)
  expect(firstCreated(path1) === lastUpdated(path1)).toBe(false)
})

test('lastUpdated', () => {
  expect(lastUpdated(path1).toString()).toMatch(/^[0-9]+$/)
  expect(lastUpdated(path2)).toBe(undefined)
  expect(lastUpdated(path1) === firstCreated(path1)).toBe(false)
})
