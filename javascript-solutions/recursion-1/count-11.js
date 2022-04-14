/**
 * Recursively computes and returns the number of '11' substrings
 * in the string. The '11' substrings should not overlap.
 * 
 * @param {String} str - A string paramter
 * @returns {Number} - Returns a count number
 */
function count11 (str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.substring(0, 2) === '11') {
    return 1 + count11(str.substring(2));
  } else {
    return count11(str.substring(1));
  }
}