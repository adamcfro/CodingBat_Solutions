/**
 * Returns a new string with the first two characters of the string moved to the end of the string.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a modified string
 */
function left2 (str) {
  return str.substring(2) + str.substring(0, 2);
}