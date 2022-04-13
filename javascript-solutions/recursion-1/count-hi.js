/**
 * Recursively computes and returns the number of times lowercase
 * 'hi' appears in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countHi (str) {
  if (2 > str.length || str === '') {
    return 0;
  }
  if (str[0] === 'h' && str[1] === 'i') {
    return 1 + countHi(str.substring(2));
  } else {
    return countHi(str.substring(1));
  }
}