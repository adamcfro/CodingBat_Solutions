/**
 * Checks if str2 appears at the front of str1 and returns true if so. The first characeter does not need to match.
 * 
 * @param {String} str1       First string parameter
 * @param {String} str2       Second string parameter
 * @returns {String}          Returns a modified string
 */
function startWord (str1, str2) {
  if (str1.substring(1, str2.length) === str2.substring(1)) {
    return str1.substring(0, str2.length);
  }
}