/**
 * Returns a new array containing the first n strings.
 * 
 * @param {Array} arr - An array of strings
 * @param {Number} n - Number of elements to add
 * @returns {Array} - A new array of strings
 */
function wordsFront (arr, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}