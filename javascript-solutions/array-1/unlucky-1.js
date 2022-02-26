/**
 * Returns true if 1 is in the first two indices and is followed by a 3, or 1 is in the last two indices and is followed by a 3.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function unlucky1 (arr) {
  for (let i = 0; i < 2; i++) {
    if (arr[i] === 1 && arr[i + 1] === 3) {
      return true;
    } else if (arr[arr.length - 2] === 1 && arr[arr.length - 1] === 3) {
      return true;
    }
  }
  return false;
}