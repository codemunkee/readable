import * as APIUtil from '../utils/api';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// Retrieve all posts

export const fetchPosts = () => dispatch => {
  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

// Add a new post

export const postPost = postData => dispatch => {
  APIUtil
    .postPost(postData)
    .then(apiResp => dispatch(addPost(apiResp)))
}

export function addPost({ id, title }) {
  return {
    type: ADD_POST,
    id,
    title
  };
}

// Delete a post

export const deletePost = postID => dispatch => {
  APIUtil
    .removePost(postID)
    .then(apiResp => dispatch(removePost(apiResp.id)))
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}
