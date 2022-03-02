/**
 * Returns a concatenated string from 2 parameter strings. If the last 
 * character of str1 and the first character of str2 match, then the first 
 * character of str2 will be omitted.
 * 
 * @param {String} str1 - First string paramater
 * @param {String} str2 - Last string parameter
 * @returns {String} - Returns concatenated string
 */
function conCat (str1, str2) {
  if (str1[str1.length -1] === str2[0]){
    return str1 + str2.substring(1);
  } else {
    return str1 + str2;
  }
}