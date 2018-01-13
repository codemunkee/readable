import { combineReducers } from 'redux';

import {
  ADD_POST,
  REMOVE_POST,
  RECEIVE_POSTS,
} from '../actions';

function posts(state = {}, action) {
  const { id, title } = action

  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, {[id]: { title }});
    case REMOVE_POST:
      const aState = Object.assign({}, state);
      delete aState[id];
      return aState
    case RECEIVE_POSTS:
      return Object.assign({}, action.posts)
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
