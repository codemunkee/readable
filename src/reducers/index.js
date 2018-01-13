import { combineReducers } from 'redux';

import {
  ADD_POST,
  REMOVE_POST,
} from '../actions';

const initialPostState = {
  0: { title: 'A Floating House to Resist the Floods of Climate Change'},
  1: { title: 'Canvas-area – A lightweight HTML Controller for one or more canvas children '},
};

function posts(state = initialPostState, action) {
  const { id, title } = action

  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, {[id]: { title }});
    case REMOVE_POST:
      const aState = Object.assign({}, state);
      delete aState[id];
      return aState
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
