/**
 * Returns the first three characters of a string repeated n times.
 * 
 * @param {String} str      A string parameter
 * @param {Number} n        Number of times string is repeated
 * @returns {String}        Returns a new string
 */
function frontTimes (str, n) {
  if (str.length < 3) {
    return str.repeat(n);
  } else {
    return str.substring(0, 3).repeat(n);
  }
}