/**
 * Returns a string made up of the word parameter separated by the sep 
 * parameter n number of times.
 * 
 * @param {String} word - A string parameter
 * @param {String} sep - A separator string
 * @param {Number} n - Number of iterations
 * @returns {String} - Returns a new string
 */
function repeatSeparator (word, sep, n) {
  let newStr = '';
  for (let i = 0; i < count; i++) {
    newStr += word;
    if (i + 1 < count) {
      newStr += sep;
    }
  }
  return newStr;
}