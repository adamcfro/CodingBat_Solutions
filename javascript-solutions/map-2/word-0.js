/**
 * Returns an object containing a key for every different string in the array.
 * Each key will have the value 0.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function word0 (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 0;
    }
  }
  return obj;
}