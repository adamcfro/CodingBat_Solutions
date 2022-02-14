/**
 * Returns a substring of length 2, starting at position n.
 * 
 * @param {String} str        A string parameter
 * @param {Number} n          An index position
 * @returns {String}          Returns a substring
 */
function twoChar (str, n) {
  if (n >= str.length - 1) {
    return str.substring(0, 2);
  } else {
    return str.substring(n, n + 2);
  }
}