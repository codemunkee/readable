import {
  FETCH_COMMENTS,
  RECEIVE_COMMENTS,
  POST_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  REMOVE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
} from '../actions';

/* eslint no-param-reassign: 0 */
/* eslint no-case-declarations: 0 */
/* eslint no-return-assign: 0 */

// COMMENTS

const initCommentsState = {
  isFetching: false,
  postingComment: false,
  removingComment: false,
  invalidReq: false,
  items: {},
};

export default function comments(state = initCommentsState, action) {
  switch (action.type) {
    case POST_COMMENT:
      return {
        ...state,
        postingComment: true,
      };
    case ADD_COMMENT:
      return {
        ...state,
        postingComment: false,
        items: {
          ...state.items,
          [action.comment.id]: {
            ...action.comment,
          },
        },
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.comments,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        removingComment: true,
      };
    case REMOVE_COMMENT:
      const newState = Object.assign({}, state);
      newState.removingComment = false;
      delete newState.items[action.id];
      return newState;
    case UP_VOTE_COMMENT:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            voteScore: state.items[action.id].voteScore += 1,
          },
        },
      };
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            voteScore: state.items[action.id].voteScore -= 1,
          },
        },
      };
    default:
      return state;
  }
}
