/**
 * Returns a string made up of the first character of string parameter 1, and the last character of string parameter 2. If either parameter is an empty string, the '@' character will replace the missing characters.
 * 
 * @param {String} str1       First string parameter
 * @param {String} str2       Second string parameter
 * @returns {String}          Returns a modified string
 */
function lastChars (str1, str2) {
  newString = '';
  if (str1.length === 0) {
    newString += '@';
  } else {
    newString += str1[0];
  }
  if (str2.length === 0) {
    newString += '@';
  } else {
    newString += str2[str2.length - 1];
  }
  return newString;
}