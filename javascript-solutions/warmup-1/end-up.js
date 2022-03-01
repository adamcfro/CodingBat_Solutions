/**
 * Returns a string with the last 3 characters capitalized.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a new string
 */
function endUp (str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.substring(0, str.length - 3) + str.substring(str.length - 3).toUpperCase();
  }
}