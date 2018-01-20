/* Generates "pretty good" UUIDs */
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function initialPostIDs() {
  // used to create some stock UUIDs when the app starts up
  const id1 = '62f7a765-7f53-42f2-bb6b-5c9f16f51ddf';
  const id2 = 'aa40d438-0b5f-4235-b1f9-c1b35b8befbb';
  return [id1, id2];
}

module.exports = {
  generateUUID,
  initialPostIDs
}
