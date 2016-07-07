import { addPost, removePost } from './posts';

import { expect } from 'chai';

console.log(expect);

describe('Post reducer', function() {
  describe('#addPost()', function() {
    it('should return new state with concated value', function() {
      expect(addPost([], { payload: 'aaa' })).to.deep.equal(['aaa']);
      expect(addPost(['bbb'], { payload: 'aaa' })).to.deep.equal(['bbb', 'aaa']);
    });
  });

  describe('#removePost()', function() {
    it('should return new state with removed value', function() {
      expect(removePost(["bbb"], { id: 0 })).to.deep.equal([]);
    });
  });
});
