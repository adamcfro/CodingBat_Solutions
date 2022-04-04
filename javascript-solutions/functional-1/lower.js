/**
 * Returns an array where each string from the array parameter
 * is converted to lowercase.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a new array of strings
 */
function lower (arr) {
  let lowercaseArray = [];
  for (let i = 0; i < arr.length; i++) {
    lowercaseArray.push(arr[i].toLowerCase());
  }
  return lowercaseArray;
}