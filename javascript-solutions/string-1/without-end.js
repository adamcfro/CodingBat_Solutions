/**
 * Returns the parameter string without the first and last characters.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a string
 */
function withoutEnd (str) {
  return str.substring(1, str.length - 1);
}