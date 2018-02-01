import {
  FETCH_CATEGORIES,
  RECEIVE_CATEGORIES,
} from '../actions';

/* eslint no-param-reassign: 0 */
/* eslint no-case-declarations: 0 */
/* eslint no-return-assign: 0 */

// CATEGORIES

const initCategoriesState = { isFetching: false, items: [] };

export default function categories(state = initCategoriesState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        items: action.categories,
      };
    default:
      return state;
  }
}
