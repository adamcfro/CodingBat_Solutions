/**
 * Returns true if there are two elements of 100 next to each other 
 * in the array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function scores100 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 100 && arr[i + 1] === 100) {
      return true;
    }
  }
  return false;
}