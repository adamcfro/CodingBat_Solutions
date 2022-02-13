/**
 * Returns the number of times 'xx' appears in a string.
 * 
 * @param {String} str      A string parameter
 * @returns {Number}        Returns a number count
 */
function countXX (str) {
  let numberOfX = 0;
  for (i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) == 'xx') {
      numberOfX += 1
    }
  }
  return numberOfX;
}