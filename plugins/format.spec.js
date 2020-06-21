import { format } from '~/plugins/format'

test('name', () => {
  expect(format.date('1999-12-31')).toBe('1999.12.31')
  expect(format.date('1999-12-31T00:00:00.000Z')).toBe('1999.12.31')
  expect(format.date('2000-1-1')).toBe('2000.01.01')
  expect(format.date('2000-01-01T00:00:00.000Z')).toBe('2000.01.01')
})
