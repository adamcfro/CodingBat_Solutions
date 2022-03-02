/**
 * Checks if the first 2 characters of a string also appear as the last two 
 * characters, and returns true if so, false otherwise.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function frontAgain (str) {
  if (str.substring(0, 2) === str.substring(str.length -2)) {
    return true;
  } else {
    return false;
  }
}