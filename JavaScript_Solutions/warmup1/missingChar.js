/*
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
*/

/**
 * 
 * @param {String} string - a given string
 * @param {Number} n - an index position
 * @returns {String} - returns string parameter with index[n] removed
 */
function missingChar (string, n) {
  if (n > string.length) {
    return `No character at index:${n}`;
  } else {
    return string.slice(0, n) + string.slice(n + 1);
  }
}