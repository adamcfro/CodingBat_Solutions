/**
 * Returns a string made up of the first two characters of the string parameter.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - A shortened string
 */
function firstTwo (str) {
  if (str.length < 2) {
    return str;
  } else {
    return str.substring(0, 2);
  }
}