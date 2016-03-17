import { handleActions } from 'redux-actions';
import { Post } from '../constants/actionTypes';

const initialState = [];

export function addPost(state, action) {
  return state.concat(action.payload);
}

export function removePost(state, action) {
  return state.slice(state.indexOf(action.id), 1);
}

const postReducer = handleActions({
  [Post.add]: addPost,
  [Post.rm]: removePost
}, initialState);

export default postReducer;
