/**
 * Recursively computes and returns a 'cleaned' string, where adjacent
 * characters that are the same have been reduced to a single character.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function stringClean (str) {
  if (str.length === 0) {
    return str;
  }
  if (str[0] === str[1]) {
    return stringClean(str.substring(1));
  } else {
    return str[0] + stringClean(str.substring(1));
  }
}