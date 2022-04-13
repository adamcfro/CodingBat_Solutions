/**
 * Recursively computes and returns the number of lowercase 'x'
 * characters in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countX (str) {
  if (str === '') {
    return 0;
  }
  if (str[0] === 'x') {
    return 1 + countX(str.substring(1));
  } else {
    return countX(str.substring(1));
  }
}