/**
 * Recursively computes and returns a modified string where identical
 * characters that are adjacent in the original string are separated
 * from each other by a '*'.
 * 
 * @param {String} str - A string paramter
 * @returns {String} - Returns a modified string
 */
function pairStar (str) {
  if (str.length === 0) {
    return str;
  }
  if (str[0] === str[1]) {
    return str[0] + '*' + pairStar(str.substring(1));
  } else {
    return str[0] + pairStar(str.substring(1));
  }
}