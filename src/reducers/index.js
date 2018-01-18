import { combineReducers } from 'redux';

import {
  POST_POST,
  ADD_POST,
  FETCH_POSTS,
  RECEIVE_POSTS,
  DELETE_POST,
  REMOVE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions';

const initPostsState = {
  isFetching: false,
  postingPost: false,
  removingPost: false,
  invalidReq: false,
  items: {}
}

function posts(state = initPostsState, action) {
  const { id } = action

  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case POST_POST:
      return {
        ...state,
        postingPost: true
      }
    case ADD_POST:
      return {
        ...state,
        postingPost: false,
        items: {
          ...state.items,
          [action.post.id]: {
            ...action.post
          }
        }
      }
    case DELETE_POST:
      return {
        ...state,
        removingPost: true
      }
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      newState.removingPost = false;
      delete newState.items[id];
      return newState
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    case UP_VOTE_POST:
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            voteScore: state.items[id].voteScore += 1
          }
        }
      }
    case DOWN_VOTE_POST:
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            voteScore: state.items[id].voteScore -= 1
          }
        }
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
