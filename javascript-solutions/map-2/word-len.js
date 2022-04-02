/**
 * Returns an object containing a key for every different string
 * in the array, and the value is that string's length.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function wordLen (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = arr[i].length;
    }
  }
  return obj;
}