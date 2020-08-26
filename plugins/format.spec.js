import { dateFormat } from '~/plugins/format'

test('dateFormat', () => {
  expect(dateFormat('1999-12-31')).toBe('1999.12.31')
  expect(dateFormat('1999-12-31T00:00:00.000Z')).toBe('1999.12.31')
  expect(dateFormat('2000-1-1')).toBe('2000.01.01')
  expect(dateFormat('2000-01-01T00:00:00.000Z')).toBe('2000.01.01')
})
