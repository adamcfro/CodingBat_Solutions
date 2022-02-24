/**
 * Returns true if the array contains no 1's and no 3's.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function lucky13 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return false;
    }
  }
  return true;
}