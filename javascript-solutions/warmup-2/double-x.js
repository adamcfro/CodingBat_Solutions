/**
 * Checks if the first instance of 'x' in a string is followed by another 'x' 
 * and returns true if so, false otherwise.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function doubleX (str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'x' && str[i + 1] === 'x') {
      return true;
    } else if (str[i] === 'x' && str[i + 1] !== 'x') {
      return false;
    }
  }
  return false;
}