
const headers = new Headers({ Authorization: 'Hi', 'Content-Type': 'application/json' });
const stockInit = { headers, mode: 'cors', cache: 'default' };

export function fetchCategories() {
  /* Retrieve categories from the API */
  const init = Object.assign({}, stockInit, { method: 'GET' });

  return fetch('http://localhost:3001/categories', init)
    .then(resp => resp.json())
    .then(resp => resp.categories)
    .catch(error => error);
}


export function fetchPosts() {
  /* Retrieve all posts from the API */
  const init = Object.assign({}, stockInit, { method: 'GET' });

  return fetch('http://localhost:3001/posts', init)
    .then(resp => resp.json())
    .then((resp) => {
      // convert our response of an array of objects to an object of objects,
      // the latter is the preferred way of describing state in redux
      const reduxified = resp.reduce((accumulator, item) =>
        Object.assign({}, accumulator, { [item.id]: item }), {});
      return reduxified;
    })
    .catch(error => error);
}

export function postPost(postData) {
  /* Post a new post to the API */
  const payload = {
    title: postData.title,
    body: postData.body,
    author: postData.author,
    category: postData.category,
    voteScore: 1,
  };

  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch('http://localhost:3001/posts', init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function putPost(postData) {
  /* Edit a post through the API */
  const payload = {
    title: postData.title,
    body: postData.body,
    category: postData.category,
  };

  const init = Object.assign({}, stockInit, { method: 'PUT', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/posts/${postData.id}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function incrementPostVotes(postID) {
  /* Increase the number of votes a post has by 1 */

  const payload = { option: 'upVote' };
  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/posts/${postID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function decrementPostVotes(postID) {
  /* Decrease the number of votes a post has by 1 */

  const payload = { option: 'downVote' };
  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/posts/${postID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function removePost(postID) {
  /* Remove a post via the API */

  const init = Object.assign({}, stockInit, { method: 'DELETE' });

  return fetch(`http://localhost:3001/posts/${postID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function fetchComments(postID) {
  /* Retrieve all comments from the API for a particular postID */
  const init = Object.assign({}, stockInit, { method: 'GET' });

  return fetch(`http://localhost:3001/posts/${postID}/comments`, init)
    .then(resp => resp.json())
    .then((resp) => {
      // convert our response of an array of objects to an object of objects,
      // the latter is the preferred way of describing state in redux
      const reduxified = resp.reduce((accumulator, item) =>
        Object.assign({}, accumulator, { [item.id]: item }), {});
      return reduxified;
    })
    .catch(error => error);
}

export function postComment(commentData) {
  /* Post a new post to the API */
  const payload = {
    body: commentData.body,
    parentId: commentData.parentId,
    author: commentData.author,
    voteScore: 1,
  };

  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch('http://localhost:3001/comments', init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function putComment(commentData) {
  /* Edit a comment through the API */
  const payload = { body: commentData.body };

  const init = Object.assign({}, stockInit, { method: 'PUT', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/comments/${commentData.id}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function removeComment(commentID) {
  /* Remove a comment via the API */

  const init = Object.assign({}, stockInit, { method: 'DELETE' });

  return fetch(`http://localhost:3001/comments/${commentID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function incrementCommentVotes(commentID) {
  /* Increase the number of votes a comment has by 1 */

  const payload = { option: 'upVote' };
  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/comments/${commentID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}

export function decrementCommentVotes(commentID) {
  /* Decrease the number of votes a comment has by 1 */

  const payload = { option: 'downVote' };
  const init = Object.assign({}, stockInit, { method: 'POST', body: JSON.stringify(payload) });

  return fetch(`http://localhost:3001/comments/${commentID}`, init)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
}
