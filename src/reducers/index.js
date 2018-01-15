import { combineReducers } from 'redux';

import {
  ADD_POST,
  REMOVE_POST,
  RECEIVE_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions';

function posts(state = {}, action) {
  const { id } = action

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post
        }
      }
    case REMOVE_POST:
      const aState = Object.assign({}, state);
      delete aState[id];
      return aState
    case RECEIVE_POSTS:
      return {
        ...action.posts
      }
    case UP_VOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore += 1
        }
      }
    case DOWN_VOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore -= 1
        }
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
