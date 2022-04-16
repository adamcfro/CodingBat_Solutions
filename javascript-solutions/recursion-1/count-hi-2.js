/**
 * Recursively computes and returns the number of times lowercase 'hi' appears
 * in the string, however do not count 'hi' that have an 'x' immediately
 * before them.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countHi2 (str) {
  if (str.length === 0) {
    return 0;
  }
  if (str[0] === 'x') {
    return countHi2(str.substring(2));
  } else if (str.substring(0, 2) === 'hi') {
    return 1 + countHi2(str.substring(2));
  } else {
    return countHi2(str.substring(1));
  }
}