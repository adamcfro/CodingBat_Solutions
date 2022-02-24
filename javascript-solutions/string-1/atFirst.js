/**
 * Returns a substring of the first 2 characters of the string parameter. If the string is less than 2 characters, the '@' character will replace missing characters.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a substring
 */
function atFirst (str) {
  if (str.length < 2) {
    while (str.length < 2) {
      str += '@';
    }
    return str;
  } else {
    return str.substring(0, 2);
  }
}