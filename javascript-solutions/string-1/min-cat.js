/**
 * Returns a concatenated string, but omits any characters from a longer string that occur after the last index of the shorter string.
 * 
 * @param {String} str1       First string parameter 
 * @param {String} str2       Second string parameter
 * @returns {String}          Returns a concatenated string
 */
function minCat (str1, str2) {
  let shortStr;
  if (str1.length <= str2.length) {
    shortStr = str1.length;
  } else {
    shortStr = str2.length;
  }
  return str1.substring(0, shortStr) + str2.substring(0, shortStr);
}