/**
 * Returns a count of the number of times a character appears three times 
 * in a row.
 * 
 * @param {String} str - A string parameter 
 * @returns {Number} - A count number
 */
function countTriple (str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
      count += 1;
    }
  }
  return count;
}