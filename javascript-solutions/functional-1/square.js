/**
 * Returns an array where each integer from the parameter array
 * is multiplied with itself.
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function square (arr) {
  let squaredArray = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArray.push(arr[i] * arr[i]);
  }
  return squaredArray;
}