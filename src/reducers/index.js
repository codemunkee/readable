import { combineReducers } from 'redux';
import categories from './categoryReducers';
import comments from './commentReducers';
import posts from './postReducers';
import {
  UPDATE_SORT,
} from '../actions';

/* eslint no-param-reassign: 0 */
/* eslint no-case-declarations: 0 */
/* eslint no-return-assign: 0 */

// SORT STYLE

const initSortState = { sortSetting: 'dateDesc' };

function sortSettings(state = initSortState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        sortSetting: action.sortType,
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  comments,
  sortSettings,
});
