export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function addPost({ title }) {
  return {
    type: ADD_POST,
    id: Math.floor(Math.random() * 20),
    title
  };
}

export function removePost({ id }) {
  return {
    type: REMOVE_POST,
  };
}
