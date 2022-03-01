/**
 * Returns a count of the number of strings with the given length n.
 * 
 * @param {Array} arr - An array of strings
 * @param {Number} n - A target string length
 * @returns {Number} - Returns a count
 */
function wordsCount (arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === n) {
      count += 1;
    }
  }
  return count;
}