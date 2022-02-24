/**
 * Returns true if the string parameter contains the substring 'xyz', and the substring is not proceded by a period '.' .
 * 
 * @param {String} str 
 * @returns {Boolean}
 */
function xyzThere (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) === 'xyz' && str[i - 1] !== '.') {
      return true;
    }
  }
  return false;
}