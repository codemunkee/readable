import * as APIUtil from '../utils/api';
import {
  FETCH_CATEGORIES,
  RECEIVE_CATEGORIES,
  FETCH_POSTS,
  RECEIVE_POSTS,
  POST_POST,
  ADD_POST,
  PUT_POST,
  EDIT_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  REMOVE_POST,
  FETCH_COMMENTS,
  RECEIVE_COMMENTS,
  DELETE_COMMENT,
  REMOVE_COMMENT,
  POST_COMMENT,
  ADD_COMMENT,
  PUT_COMMENT,
  EDIT_COMMENT,
  UPDATE_SORT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
} from './types';

// Retreive Categories

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: FETCH_CATEGORIES,
  });

  APIUtil
    .fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)));
};

// Retrieve all posts

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const fetchPosts = () => (dispatch) => {
  dispatch({
    type: FETCH_POSTS,
  });

  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));
};

// Add a new post

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export const postPost = postData => (dispatch) => {
  dispatch({
    type: POST_POST,
  });

  APIUtil
    .postPost(postData)
    .then(apiResp => dispatch(addPost(apiResp)));
};

// Edit an existing post

export function editPost(post) {
  return {
    type: EDIT_POST,
    post,
  };
}

export const putPost = postData => (dispatch) => {
  dispatch({
    type: PUT_POST,
  });

  APIUtil
    .putPost(postData)
    .then(apiResp => dispatch(editPost(apiResp)));
};

// Up vote a post

export function upVotePost({ id }) {
  return {
    type: UP_VOTE_POST,
    id,
  };
}

export const incrementPostVotes = postID => (dispatch) => {
  APIUtil
    .incrementPostVotes(postID)
    .then(apiResp => dispatch(upVotePost(apiResp)));
};

// Down vote a post

export function downVotePost({ id }) {
  return {
    type: DOWN_VOTE_POST,
    id,
  };
}

export const decrementPostVotes = postID => (dispatch) => {
  APIUtil
    .decrementPostVotes(postID)
    .then(apiResp => dispatch(downVotePost(apiResp)));
};

// Delete a post

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export const deletePost = postID => (dispatch) => {
  dispatch({
    type: DELETE_POST,
  });

  APIUtil
    .removePost(postID)
    .then(apiResp => dispatch(removePost(apiResp.id)));
};

// Retrieve all comments for a post

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const fetchComments = postID => (dispatch) => {
  dispatch({
    type: FETCH_COMMENTS,
  });

  APIUtil
    .fetchComments(postID)
    .then(comments => dispatch(receiveComments(comments)));
};

// Add a new comment

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export const postComment = commentData => (dispatch) => {
  dispatch({
    type: POST_COMMENT,
  });

  APIUtil
    .postComment(commentData)
    .then(apiResp => dispatch(addComment(apiResp)));
};

// Edit an existing comment

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  };
}

export const putComment = commentData => (dispatch) => {
  dispatch({
    type: PUT_COMMENT,
  });

  APIUtil
    .putComment(commentData)
    .then(apiResp => dispatch(editComment(apiResp)));
};

// Delete a comment

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}

export const deleteComment = commentID => (dispatch) => {
  dispatch({
    type: DELETE_COMMENT,
  });

  APIUtil
    .removeComment(commentID)
    .then(apiResp => dispatch(removeComment(apiResp.id)));
};

// Up vote a comment

export function upVoteComment({ id }) {
  return {
    type: UP_VOTE_COMMENT,
    id,
  };
}

export const incrementCommentVotes = commentID => (dispatch) => {
  APIUtil
    .incrementCommentVotes(commentID)
    .then(apiResp => dispatch(upVoteComment(apiResp)));
};

// Down vote a comment

export function downVoteComment({ id }) {
  return {
    type: DOWN_VOTE_COMMENT,
    id,
  };
}

export const decrementCommentVotes = commentID => (dispatch) => {
  APIUtil
    .decrementCommentVotes(commentID)
    .then(apiResp => dispatch(downVoteComment(apiResp)));
};

// Update sort settings

export function updateSort(sortType) {
  return {
    type: UPDATE_SORT,
    sortType,
  };
}
