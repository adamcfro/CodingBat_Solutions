/**
 * Recursively computes and returns the number of lowercase 'x'
 * characters in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countX (str) {
  let i = 0;
  if (str === '') {
    return 0;
  }
  if (str[0] === 'x') {
    i++;
    return 1 + countX(str.substring(i));
  } else {
    i++;
    return countX(str.substring(i));
  }
}