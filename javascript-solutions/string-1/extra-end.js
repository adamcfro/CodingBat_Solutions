/**
 * Returns a string made up of the last 2 characters of the string parameter 
 * repeated 3 times.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a concatenated string
 */
function extraEnd (str) {
  return str.substring(str.length - 2).repeat(3);
}