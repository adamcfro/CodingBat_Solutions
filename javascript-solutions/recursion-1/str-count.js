/**
 * Recursively computes and returns the number of times the 'sub' parameter
 * appears in the string parameter, without the sub strings overlapping.
 * 
 * @param {String} str - A string parameter
 * @param {String} sub - A substring matched against the string parameter
 * @returns {Number} - Returns a count number 
 */
function strCount (str, sub) {
  if (str.length === 0) {
    return 0;
  }
  if (str.substring(0, 3) === sub) {
    return 1 + strCount(str.substring(3), sub);
  } else {
    return strCount(str.substring(1), sub);
  }
}