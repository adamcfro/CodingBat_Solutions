/**
 * Returns a string where the index[n] is removed from the original string.
 * 
 * @param {String} string - A string parameter
 * @param {Number} n - An index position
 * @returns {String} - Returns a string with index[n] removed
 */
function missingChar (string, n) {
  if (n > string.length) {
    return `No character at index:${n}`;
  } else {
    return string.slice(0, n) + string.slice(n + 1);
  }
}