/**
 * Checks if an array length two contains a 2 or 3.
 * 
 * @param {Array} arr         An array parameter 
 * @returns {Boolean}         Returns a Boolean
 */
function has23 (arr) {
  if (arr.includes(2) || arr.includes(3)) {
    return true;
  }
  return false;
}