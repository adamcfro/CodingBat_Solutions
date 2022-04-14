/**
 * Recursively computes and returns the number of pairs in the given string.
 * A 'pair' in a string is two instances of a character separated by a 
 * character.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countPairs (str) {
  if (str.length === 0) {
    return 0;
  }
  if (str[0] === str[2]) {
    return 1 + countPairs(str.substring(1));
  } else {
    return countPairs(str.substring(1));
  }
}