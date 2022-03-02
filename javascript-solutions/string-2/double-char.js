/**
 * Returns a string with each original character doubled in position.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function doubleChar (str) {
  let doubleStr = '';
  for (let i = 0; i < str.length; i++) {
    doubleStr = doubleStr.concat(str[i].repeat(2));
  }
  return doubleStr;
}