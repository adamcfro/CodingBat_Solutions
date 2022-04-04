/**
 * Returns an array where each integer from the parameter array
 * is multiplied by 2.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function doubling (arr) {
  let doubledArray = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}