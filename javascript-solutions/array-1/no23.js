/**
 * Returns true if an array does not contain a 2 or 3, returns false otherwise.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Boolean}         Returns a Boolean
 */
function no23 (arr) {
  if (arr.indexOf(2) !== -1 || arr.indexOf(3) !== -1) {
    return false;
  }
  return true;
}