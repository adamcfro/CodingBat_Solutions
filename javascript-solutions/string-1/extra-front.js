/**
 * Returns a string made up of 3 copies of the first 2 characters of the 
 * original string. If there are fewer than 2 characters, returns 3 copies of 
 * whatever is there.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function extraFront (str) {
  if (str.length < 2) {
    return str.repeat(3);
  } else {
    return str.substring(0, 2).repeat(3);
  }
}