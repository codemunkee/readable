import * as APIUtil from '../utils/api';
export const ADD_POST = 'ADD_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
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
    .then(postData => dispatch(addPost(postData)))
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

// Up vote a post

export const incrementPostVotes = postID => dispatch => {
  APIUtil
    .incrementPostVotes(postID)
    .then(apiResp => dispatch(upVotePost(apiResp)))
}

export function upVotePost({ id }) {
  return {
    type: UP_VOTE_POST,
    id
  };
}

// Down vote a post

export const decrementPostVotes = postID => dispatch => {
  APIUtil
    .decrementPostVotes(postID)
    .then(apiResp => dispatch(downVotePost(apiResp)))
}

export function downVotePost({ id }) {
  return {
    type: DOWN_VOTE_POST,
    id
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
