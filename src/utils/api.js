
const initGET = { method: 'GET',
                  headers: new Headers({'Authorization': 'Hi'}),
                  mode: 'cors',
                  cache: 'default' };

export function fetchPosts() {
  return fetch('http://localhost:3001/posts', initGET)
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
