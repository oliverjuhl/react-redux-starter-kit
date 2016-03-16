import { handleActions } from 'redux-actions';
import { Todo } from '../constants/actionTypes';

const initialState = {};

export default handleActions({
  [Todo.add]: addTodo
}, initialState);

export function addTodo(state, action) {
  return { ...state, todo: action.payload.todo };
}