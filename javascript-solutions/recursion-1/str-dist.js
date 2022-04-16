/**
 * Recursively computes and returns the largest substring which starts
 * and ends with the 'sub' parameter and return its length;
 * 
 * @param {String} str - A string parameter
 * @param {String} sub - A substring to compare against the string parameter
 * @returns {Number} - Returns a count number
 */
function strDist (str, sub) {
  if (str.length === 0) {
    return 0;
  }
  if (str === sub) {
    return str.length;
  }
  if (str.substring(0, sub.length) === sub) {
    if (str.substring(str.length - sub.length) === sub) {
      return str.length;
    } else {
      return strDist(str.substring(0, str.length - 1), sub);
    }
  } else {
    return strDist(str.substring(1), sub);
  }
}