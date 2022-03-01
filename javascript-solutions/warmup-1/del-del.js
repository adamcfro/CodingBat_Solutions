/**
 * Checks if the substring 'del' occurs, starting at index 1, and 
 * returns the original string if it doesn't exist, or returns a new string 
 * with the substring 'del' removed.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function delDel (str) {
  if (str.substring(1, 4) === 'del') {
    return str[0] + str.substring(4, str.length);
  } else {
    return str;
  }
}