import { handleActions } from 'redux-actions';
import { Post } from '../constants/actionTypes';
import Immutable from 'immutable';

// const uuid = require('node-uuid');

const initialState = Immutable.Map();

export function addPost(state, action) {
  // console.log('addpost');
  return state.set(state.size, action.payload);
}

export function removePost(state, action) {
  // console.log('removepost');
  return state.filter((post) => post.get(post.uuid) !== action.uuid);
}

const postReducer = handleActions({
  [Post.add]: addPost,
  [Post.rm]: removePost
}, initialState);

export default postReducer;
