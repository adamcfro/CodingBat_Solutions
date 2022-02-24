/**
 * Returns true if the array contains three adjacent numbers whose values increment by 1.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function tripleUp (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 1 && arr[i + 2] - arr[i] === 2) {
      return true;
    }
  }
  return false;
}