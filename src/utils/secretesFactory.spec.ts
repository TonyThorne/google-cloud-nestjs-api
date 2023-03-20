import { secretesFactory } from './secretesFactory'

jest.setTimeout(30000)

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

import { main as google } from './googleSecrete'
import { cegedim } from './cegedimSecrete'
// import { secretesFactory } from './secretesFactory'

jest.mock('./googleSecrete', () => ({
  main: jest.fn(() => 'google-secret'),
}))

jest.mock('./cegedimSecrete', () => ({
  cegedim: jest.fn(() => 'cegedim'),
}))

describe('secretesFactory', () => {
  it('returns Google secret when "google" is passed in as the service', async () => {
    const result = await secretesFactory('google')
    expect(google).toHaveBeenCalled()
    expect(result).toEqual('google-secret')
  })

  it('returns Cegedim secret when "cegedim" is passed in as the service', async () => {
    const result = await secretesFactory('cegedim')
    expect(cegedim).toHaveBeenCalled()
    expect(result).toEqual('cegedim')
  })

  it('returns "secret" when an invalid service name is passed in', async () => {
    const result = await secretesFactory('invalid-service')
    expect(result).toEqual('secret')
  })
})
