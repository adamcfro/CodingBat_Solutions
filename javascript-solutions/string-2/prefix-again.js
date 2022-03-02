/**
 * Returns true if the first n characters appear elsewhere in the string.
 * 
 * @param {String} str - A string parameter
 * @param {Number} n - Number of characters in substring
 * @returns {Boolean} - Returns a Boolean
 */
function prefixAgain (str, n) {
  let prefix = str.substring(0, n);
  for (let i = 1; i < str.length; i++) {
    if (str.substring(i, i + n) === prefix) {
      return true;
    }
  }
  return false;
}