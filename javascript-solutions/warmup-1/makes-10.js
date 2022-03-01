/**
 * Returns true if a parameter is 10, or if the sum of parameters is 10
 * 
 * @param {Number} a - First number parameter
 * @param {Number} b - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function makes10 (a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
}