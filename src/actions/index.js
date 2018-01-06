export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function addPost({ id, name }) {
  return {
    type: ADD_POST,
    name
  };
}

export function removeFromCalendar ({ id }) {
  return {
    type: REMOVE_POST,
  };
}
