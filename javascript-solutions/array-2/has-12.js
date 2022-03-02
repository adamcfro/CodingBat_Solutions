/**
 * Returns true if there is a 1 in the array with a 2 appearing 
 * later in the array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function has12 (arr) {
  let hasOne = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      hasOne = true;
    } else if (hasOne && arr[i] === 2) {
      return true;
    }
  }
  return false;
}