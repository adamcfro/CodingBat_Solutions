/**
 * Returns the number of times the last two characters in the string appears 
 * elsewhere in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function last2 (str) {
  let count = 0;
  let last2Chars = str.substring(str.length - 2);
  for (let i = 0; i < str.length - 2; i++) {
    if (str.substring(i, i + 2) === last2Chars) {
      count += 1;
    }
  }
  return count;
}