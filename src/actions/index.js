import * as APIUtil from '../utils/api';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const FETCH_POSTS = 'FETCH_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const POST_POST = 'POST_POST';
export const ADD_POST = 'ADD_POST';
export const PUT_POST = 'PUT_POST';
export const EDIT_POST = 'EDIT_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const DELETE_POST = 'DELETE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const POST_COMMENT = 'POST_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const PUT_COMMENT = 'PUT_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const UPDATE_SORT = 'UPDATE_SORT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

// Retreive Categories

export const fetchCategories = () => dispatch => {
  dispatch({
    type: FETCH_CATEGORIES
  });

  APIUtil
    .fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

// Retrieve all posts

export const fetchPosts = () => dispatch => {
  dispatch({
    type: FETCH_POSTS
  });

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
  dispatch({
    type: POST_POST
  });

  APIUtil
    .postPost(postData)
    .then(postData => dispatch(addPost(postData)))
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

// Edit an existing post

export const putPost = postData => dispatch => {
  dispatch({
    type: PUT_POST
  });

  APIUtil
    .putPost(postData)
    .then(postData => dispatch(editPost(postData)))
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post
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
  dispatch({
    type: DELETE_POST
  });

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

// Retrieve all comments for a post

export const fetchComments = postID => dispatch => {
  dispatch({
    type: FETCH_COMMENTS
  });

  APIUtil
    .fetchComments(postID)
    .then(comments => dispatch(receiveComments(comments)))
}

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

// Add a new comment

export const postComment = commentData => dispatch => {
  dispatch({
    type: POST_COMMENT
  });

  APIUtil
    .postComment(commentData)
    .then(commentData => dispatch(addComment(commentData)))
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

// Edit an existing comment

export const putComment = commentData => dispatch => {
  dispatch({
    type: PUT_COMMENT
  });

  APIUtil
    .putPost(commentData)
    .then(commentData => dispatch(editComment(commentData)))
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  };
}

// Delete a comment

export const deleteComment = commentID => dispatch => {
  dispatch({
    type: DELETE_COMMENT
  });

  APIUtil
    .removeComment(commentID)
    .then(apiResp => dispatch(removeComment(apiResp.id)))
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

// Up vote a comment

export const incrementCommentVotes = commentID => dispatch => {
  APIUtil
    .incrementCommentVotes(commentID)
    .then(apiResp => dispatch(upVoteComment(apiResp)))
}

export function upVoteComment({ id }) {
  return {
    type: UP_VOTE_COMMENT,
    id
  };
}

// Down vote a comment

export const decrementCommentVotes = commentID => dispatch => {
  APIUtil
    .decrementCommentVotes(commentID)
    .then(apiResp => dispatch(downVoteComment(apiResp)))
}

export function downVoteComment({ id }) {
  return {
    type: DOWN_VOTE_COMMENT,
    id
  };
}

// Update sort settings

export function updateSort(sortType){
  return {
    type: UPDATE_SORT,
    sortType
  };
}
