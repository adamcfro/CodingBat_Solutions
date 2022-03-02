/**
 * Returns true if either string parameter appears at the very end of the other 
 * parameter.
 * 
 * @param {String} str1 - First string parameter
 * @param {String} str2 - Second string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function endOther (str1, str2) {
  if (str1.length >= str2.length) {
    return str2 === (str1.substring(str1.length - str2.length));
  }
}