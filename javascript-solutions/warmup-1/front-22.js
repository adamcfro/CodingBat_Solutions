/**
 * Returns a new string with the first 2 characters of the original string 
 * added to the front and back.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a new string
 */
function front22 (str) {
  if (str.length < 2) {
    return str.repeat(3);
  } else {
    return str.substring(0, 2) + str + str.substring(0, 2);
  }
}