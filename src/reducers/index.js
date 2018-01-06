import { combineReducers } from 'redux'

import {
  ADD_POST,
  REMOVE_POST,
} from '../actions';

const initialPostState = [
  {id: 0, name: 'foo'},
  {id: 1, name: 'bar'},
];

function posts(state = initialPostState, action) {
  const { id, name } = action

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [id]: { 'name': name }
      }
    case REMOVE_POST:
      return {
        ...state,
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
