import { combineReducers } from 'redux'

import {
  ADD_POST,
  REMOVE_POST,
} from '../actions';

const initialPostState = [
  {id: 0, title: 'A Floating House to Resist the Floods of Climate Change'},
  {id: 1, title: 'Canvas-area – A lightweight HTML Controller for one or more canvas children '},
];

function posts(state = initialPostState, action) {
  const { id, title } = action

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [id]: { 'title': title }
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
