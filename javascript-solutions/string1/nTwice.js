/**
 * Returns a string made up of the first and last n characters from the parameter string.
 * 
 * @param {String} str        A string parameter
 * @param {Number} n          Number of character
 * @returns {String}          Returns a modified string
 */
function nTwice (str, n) {
  return str.substring(0, n) + str.substring(str.length - n);
}