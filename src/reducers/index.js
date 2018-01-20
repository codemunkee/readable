import { combineReducers } from 'redux';

import {
  FETCH_CATEGORIES,
  RECEIVE_CATEGORIES,
  POST_POST,
  ADD_POST,
  FETCH_POSTS,
  RECEIVE_POSTS,
  DELETE_POST,
  REMOVE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  FETCH_COMMENTS,
  RECEIVE_COMMENTS,
} from '../actions';

// CATEGORIES

const initCategoriesState = {
  isFetching: false,
  items: []
}

function categories(state = initCategoriesState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        items: action.categories
      }
    default:
      return state
  }
}

// POSTS

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
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
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

// COMMENTS

const initCommentsState = {
  isFetching: false,
  postingComment: false,
  removingComment: false,
  invalidReq: false,
  items: {}
}

function comments(state = initCommentsState, action) {
  const { id } = action

  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  comments
})
