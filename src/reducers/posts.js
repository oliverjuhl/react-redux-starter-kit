import { handleActions } from 'redux-actions';
import { Post } from '../constants/actionTypes';

const initialState = [];

export function addPost(state, action) {
  return [...state, action.payload];
}

export function removePost(state, action) {
  return [
    ...state.slice(0, action.id),
    ...state.slice(action.id + 1),
  ];
}

const postReducer = handleActions({
  [Post.add]: addPost,
  [Post.rm]: removePost,
}, initialState);

export default postReducer;
