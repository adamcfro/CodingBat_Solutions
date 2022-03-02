/**
 * Returns a new string with the last two characters moved to the 
 * front of the string.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function right2 (str) {
  return str.substring(str.length - 2) + str.substring(0, str.length - 2);
}