import crypto from 'crypto'
import { firstCreated, lastUpdated } from './doc'

const path1 = `${process.cwd()}/package.json`
const path2 = `${process.cwd()}/foo.json`
const path3 = `${crypto.randomBytes(8).toString('hex')}/foo.json`

test('firstCreated', () => {
  expect(firstCreated(path1).toString()).toMatch(/^[0-9]+$/)
  expect(firstCreated(path1) === lastUpdated(path1)).toBe(false)
  expect(firstCreated(path2)).toBe(undefined)
  expect(firstCreated(path3)).toBe(undefined)
})

test('lastUpdated', () => {
  expect(lastUpdated(path1).toString()).toMatch(/^[0-9]+$/)
  expect(lastUpdated(path1) === firstCreated(path1)).toBe(false)
  expect(lastUpdated(path2)).toBe(undefined)
  expect(lastUpdated(path3)).toBe(undefined)
})
