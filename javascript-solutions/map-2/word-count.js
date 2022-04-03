/**
 * Returns an object with a key for each different string,
 * with the value the number of times that string appears in the array.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function wordCount (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] += 1;
    } else if (!obj.hasOwnProperty[arr[i]]) {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}