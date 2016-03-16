import { Post } from '../constants/actionTypes';

export function addPost(payload) {
  return {
    type: Post.add,
    payload
  };
}

export function remove(uuid) {
  return {
    type: Post.rm,
    uuid
  };
}
