/**
 * Recursively computes and returns a modified string where all the
 * lowercase 'x' characters have been changed to 'y' characters.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function changeXY (str) {
  if (str.length === 0) {
    return str;
  }
  if (str[0] === 'x') {
    return 'y' + changeXY(str.substring(1));
  }
  return str[0] + changeXY(str.substring(1));
}