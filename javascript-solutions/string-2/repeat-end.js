/**
 * Returns a string made up of the last n characters repeated n number of times.
 * 
 * @param {String} str - A string parameter 
 * @param {Number} n - Number of characters and repetitions
 * @returns {String} - Returns a modified string
 */
function repeatEnd (str, n) {
  return str.substring(str.length - n).repeat(n);
}