const { dabaojian } = require('./dabaojian.js')

test('大宝剑1000', () => {
  expect(dabaojian(1000)).toBe('双人')
})
