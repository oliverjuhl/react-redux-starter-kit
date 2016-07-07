import { addPost, removePost } from './posts';

import { expect } from 'chai';
var deepFreeze = require('deep-freeze');

describe('Post reducer', function() {
  describe('#addPost()', function() {
    it('should return new state with concated value', function() {
      const state = deepFreeze([]);
      expect(addPost(state, { payload: 'aaa' })).to.deep.equal(['aaa']);
    });

    it('should return new state even if this state contained some values', function () {
      const state = deepFreeze(['bbb']);
      expect(addPost(state, { payload: 'aaa' })).to.deep.equal(['bbb', 'aaa']);
    });
  });

  describe('#removePost()', function() {
    it('should return new state with removed value', function() {
      expect(removePost(["bbb"], { id: 0 })).to.deep.equal([]);
    });
  });
});
