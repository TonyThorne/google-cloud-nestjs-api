import { secretesFactory } from './secretesFactory';

describe('secretesFactory', () => {
  it('should return a string', () => {
    const result = secretesFactory();
    expect(typeof result).toBe('string');
  });
  it('should return google secretes', () => {
    const result = secretesFactory('google');
    expect(result).toBe('google');
  });
  it('should return Cegedim secretes', () => {
    const result = secretesFactory('cegedim');
    expect(result).toBe('cegedim');
  });
});
