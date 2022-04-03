/**
 * Loops over the given array of strings to build a result string like this:
 * when a string appears the 2nd, 4th, 6th, etc. time in the array,
 * append the string to the result. Returns the new string.
 * 
 * @param {Array} arr - An array of strings
 * @returns {String} - A newly created string
 */
function wordAppend (arr) {
  let obj = {};
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else if (arr[i] in obj) {
      obj[arr[i]] += 1;
      if (obj[arr[i]] % 2 === 0) {
        str += arr[i];
      }
    }
  }
  return str;
}