/**
 * Checks if the string[1: 3] equals 'ix' and returns true if so, 
 * false otherwise.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function mixStart (str) {
  if (str.substring(1, 3) === 'ix') {
    return true;
  } else {
    return false;
  }
}