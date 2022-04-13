/**
 * Recursively computes and returns a modified string where all
 * the 'x' characters have been removed.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function noX (str) {
  if (str.length === 0) {
    return str;
  }
  if (str[0] === 'x') {
    return noX(str.substring(1));
  } else {
    return str[0] + noX(str.substring(1));
  }
}