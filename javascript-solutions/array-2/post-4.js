/**
 * Returns an array containing all elements that occur after the last 4 
 * that appears in the parameter array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a slice of array
 */
function post4 (arr) {
  let startSlice = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      startSlice = i + 1;
    }
  }
  return arr.slice(startSlice, arr.length);
}