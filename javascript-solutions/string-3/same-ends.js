/**
 * Returns the longest substring that appears at both the front and back of the 
 * string parameter.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - A substring
 */
function sameEnds (str) {
  let longestSub = '';
  for (let i = 0; i < str.length; i++) {
    if (str.substring(0, i) === str.substring(str.length - i)) {
      longestSub = str.substring(0, i);
    }
  }
  return longestSub;
}