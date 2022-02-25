/**
 * Returns a new array containing the first 'count' number of even numbers from the original array.
 * 
 * @param {Array} arr         An array of numbers
 * @param {Number} count      The number of first even numbers
 * @returns {Array}           Returns a new array
 */
function copyEvens (arr, count) {
  let evensArray = [];
  for (let i = 0; evensArray.length < count; i++) {
    if (arr[i] % 2 === 0) {
      evensArray.push(arr[i]);
    }
  }
  return evensArray;
}