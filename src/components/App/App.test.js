import expect from 'expect';

describe('lala', () => {
  it('should return ok', () => {
    expect(true).toExist();
  });

  it('should return awdoawdoh', () => {
    expect(false).toNotExist();
  });
});
