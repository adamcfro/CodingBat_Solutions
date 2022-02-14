/**
 * Checks if the first two characters of a string match the last two characters, and omits the first two characters if they match. Otherwise, the original string is returned.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a substring
 */
function without2 (str) {
  if (str.length <= 2) {
    return '';
  } else if (str.substring(0, 2) === str.substring(str.length - 2)){
    return str.substring(2);
  } else {
    return str;
  }
}