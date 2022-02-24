/**
 * Returns a new array containing the first n even numbers that appear in an array;
 * 
 * @param {Array} arr         An array of positive numbers
 * @param {Number} n          The number of even numbers
 * @returns {Array}           Returns a new array
 */
function copyEvens (arr, n) {
  let evensArray = [];
  for (let i = 0; evensArray.length < n; i++) {
    if (arr[i] % 2 === 0) {
      evensArray.push(arr[i]);
    }
  }
  return evensArray;
}