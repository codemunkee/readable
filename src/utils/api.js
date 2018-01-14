
const headers = new Headers({'Authorization': 'Hi',
                             'Content-Type': 'application/json'});
const stockInit = { headers,
                    mode: 'cors',
                    cache: 'default' };


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
    'id' : 'x23yz' + Math.floor(Math.random() * 10),
    'title': postData.title,
    'timestamp': 234,
    'body': postData.body,
    'author': 'russ',
    'category': 'redux',
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
