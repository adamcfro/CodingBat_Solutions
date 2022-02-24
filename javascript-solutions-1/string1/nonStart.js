/**
 * Returns a concatenated string with the first character removed from each parameter.
 * 
 * @param {String} str1       First string parameter 
 * @param {String} str2       Second string parameter
 * @returns 
 */
function nonStart (str1, str2) {
  return str1.substring(1) + str2.substring(1);
}