import { Post } from '../constants/actionTypes';

export function addPost(payload) {
  return {
    type: Post.add,
    payload
  };
}

export function remove(id) {
  return {
    type: Post.rm,
    id
  };
}
