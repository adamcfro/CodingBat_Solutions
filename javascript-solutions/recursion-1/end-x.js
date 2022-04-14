/**
 * Recursively computes and returns a modified string where all the
 * lowercase 'x' characters have been moved to the end of the string.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function endX (str) {
  if (str.length <= 0) {
    return str;
  }
  if (str[0] === 'x') {
    return endX(str.substring(1)) + 'x';
  } else {
    return str[0] + endX(str.substring(1));
  }
}