const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-strings', () => {
    var res = isRealString(456);
    expect(res).toBe(false);

  });
  it('should reject strings with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);

  });
  it('should allow strings with non-space characters', () => {
    var res = isRealString('  Jesse  ');
    expect(res).toBe(true);

  });
})
