/**
 * Recursively computes and returns if at least 'n' copies of sub appear
 * in the string somewhere, possibly with overlapping.
 * 
 * @param {String} str - A string parameter
 * @param {String} sub - A substring to compare against the string parameter
 * @param {Number} n - A count number
 * @returns {Boolean} - Returns a Boolean
 */
function strCopies (str, sub, n) {
  if (n === 0) {
    return true;
  }
  if (str.length < sub.length) {
    return false;
  }
  if (str.substring(0, sub.length) === sub) {
    return strCopies(str.substring(1), sub, n - 1);
  }
  return strCopies(str.substring(1), sub, n);
}