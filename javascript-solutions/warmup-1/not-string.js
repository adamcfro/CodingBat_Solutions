/**
 * Returns a string with "not " added to the front, unless the string already 
 * begins with "not", in which case it will just return the original string.
 * 
 * @param {String} str - A string
 * @returns {String} - Returns a modified string
 */
function notString (str) {
  if (str.slice(0, 3) === 'not') {
    return str;
  } else {
    return 'not ' + str;
  }
}