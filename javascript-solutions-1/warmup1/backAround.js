/**
 * Returns a new string with the last character of the original string added to the front and back
 * 
 * @param {String} str    A string parameter
 * @returns {String}      Returns a new string
 */
function backAround (str) {
  return str[str.length - 1] + str + str[str.length - 1];
}