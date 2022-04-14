/**
 * Recursively computes and returns a string where all the adjacent
 * characters are now separated by a '*'.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function allStar (str) {
  if (str.length === 0) {
    return str;
  }
  if (str.length === 1) {
    return str[0];
  } else {
    return str[0] + '*' + allStar(str.substring(1));
  }
}