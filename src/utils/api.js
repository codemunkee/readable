
const headers = new Headers({'Authorization': 'Hi',
                             'Content-Type': 'application/json'});
const stockInit = { headers,
                    mode: 'cors',
                    cache: 'default' };


export function fetchCategories() {
  /* Retrieve categories from the API */
  const init = Object.assign({}, stockInit, {'method': 'GET'})

  return fetch('http://localhost:3001/categories', init)
    .then(resp => resp.json())
    .then(resp => {
      return resp.categories;
    })
    .catch(error => {
      console.log('Error: Unable to retrieve categories.', error);
      return {};
    });
}


export function fetchPosts() {
  /* Retrieve all posts from the API */
  const init = Object.assign({}, stockInit, {'method': 'GET'})

  return fetch('http://localhost:3001/posts', init)
    .then(resp => resp.json())
    .then(resp => {
      // convert our response of an array of objects to an object of objects,
      // the latter is the preferred way of describing state in redux
      const reduxified = resp.reduce((accumulator, item) => {
        accumulator[item.id] = item;
        return accumulator
      }, {})
      return reduxified;
    })
    .catch(error => {
      console.log('Error: Unable to retrieve posts.', error);
      return {};
    });
}

export function postPost(postData) {
  /* Post a new post to the API */
  const payload = {
    'title': postData.title,
    'timestamp': 234,
    'body': postData.body,
    'author': 'russ',
    'category': postData.category,
    'voteScore': 1
  };

  const init = Object.assign({}, stockInit,
                             {'method': 'POST',
                              'body': JSON.stringify(payload)});

  return fetch('http://localhost:3001/posts', init)
    .then(resp => resp.json())
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log('Error: Unable to add post.', error);
      return {};
    });
}

export function incrementPostVotes(postID) {
  /* Increase the number of votes a post has by 1 */

  const payload = { 'option': 'upVote' };

  const init = Object.assign({}, stockInit,
                             {'method': 'POST',
                              'body': JSON.stringify(payload)});

  return fetch('http://localhost:3001/posts/' + postID, init)
    .then(resp => resp.json())
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log('Error: Unable to up vote post.', error);
      return {};
    });
}

export function decrementPostVotes(postID) {
  /* Decrease the number of votes a post has by 1 */

  const payload = { 'option': 'downVote' };

  const init = Object.assign({}, stockInit,
                             {'method': 'POST',
                              'body': JSON.stringify(payload)});

  return fetch('http://localhost:3001/posts/' + postID, init)
    .then(resp => resp.json())
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log('Error: Unable to up down vote post.', error);
      return {};
    });
}

export function removePost(postID) {
  /* Remove a post via the API */

  const init = Object.assign({}, stockInit, {'method': 'DELETE'});

  return fetch('http://localhost:3001/posts/' + postID, init)
    .then(resp => resp.json())
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log('Error: Unable to delete post.', error);
      return {};
    });
}

export function fetchComments(postID) {
  /* Retrieve all comments from the API for a particular postID */
  const init = Object.assign({}, stockInit, {'method': 'GET'})
  console.log('POSTID', postID)

  return fetch('http://localhost:3001/posts/' + postID + '/comments', init)
    .then(resp => resp.json())
    .then(resp => {
      console.log('API RESP', resp);
      // convert our response of an array of objects to an object of objects,
      // the latter is the preferred way of describing state in redux
      const reduxified = resp.reduce((accumulator, item) => {
        accumulator[item.id] = item;
        return accumulator
      }, {})
      return reduxified;
    })
    .catch(error => {
      console.log('Error: Unable to retrieve posts.', error);
      return {};
    });
}
