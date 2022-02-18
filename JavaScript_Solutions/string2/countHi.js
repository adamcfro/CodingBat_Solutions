/**
 * Returns the total number of times the substring 'hi' appears in the parameter string.
 * 
 * @param {String} str        A string parameter 
 * @returns {Number}          A count number
 */
function countHi (str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 2) === 'hi') {
      total += 1;
    }
  }
  return total;
}