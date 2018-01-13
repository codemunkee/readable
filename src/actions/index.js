import * as APIUtil from '../utils/api';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => {
  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export function addPost({ title }) {
  return {
    type: ADD_POST,
    id: Math.floor(Math.random() * 20),
    title
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}
