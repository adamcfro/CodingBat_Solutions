/**
 * Returns a new array where all strings of length n are omitted.
 * 
 * @param {Array} arr - An array of strings
 * @param {Number} n - Target string length
 * @returns {Array} - Returns a new array of strings
 */
function wordsWithoutList (arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}