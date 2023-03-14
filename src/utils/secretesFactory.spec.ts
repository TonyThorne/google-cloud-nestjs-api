import { secretesFactory } from './secretesFactory'

describe('secretesFactory', () => {
  it('should return a string', () => {
    const result = secretesFactory()
    expect(typeof result).toBe('string')
  })
  it('should return google secretes', async () => {
    const result = await secretesFactory('google')
    expect(typeof result).toBe('string')
  })
  it('should return Cegedim secretes', () => {
    const result = secretesFactory('cegedim')
    expect(result).toBe('cegedim')
  })
})
