import { Post } from '../constants/actionTypes';
import { getSomething } from '../services/ExampleService';

export function addPost(payload) {
  return {
    type: Post.add,
    payload,
  };
}

export function removePost(id) {
  return {
    type: Post.rm,
    id,
  };
}

export function asyncPost() {
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.message;
  }

  return dispatch => getSomething()
    .then(handleErrors)
    .then((response) => {
      dispatch(addPost('super'));
      return response;
    })
    .catch(error => dispatch(addPost(error)));
}
