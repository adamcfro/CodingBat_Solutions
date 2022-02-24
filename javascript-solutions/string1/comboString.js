/**
 * Checks which parameter is longer, then returns a concatenated string in the form shortStr longStr longStr shortStr.
 * 
 * @param {String} str1       First string parameter
 * @param {String} str2       Second string parameter
 * @returns 
 */
function comboString (str1, str2) {
  let shortStr = (str1.length <= str2.length) ? str1 : str2;
  let longStr = (str2.length >= str1.length) ? str2 : str1;
  return shortStr + longStr + longStr + shortStr;
}


