/**
 * Checks if a number appears three times in a row in an array.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function noTriples (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return true;
    }
  }
  return false;
}