/**
 * Returns a substring of the characters at the front of the string that match 
 * the characters at the back of the string when reversed.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a substring
 */
function mirrorEnds (str) {
  let substr = '';
  for (let i = 0; i <= str.length; i++) {
    let endString = str.substring(str.length - i);
    let reverseStr = endString.split('').reverse().join('');
    if (str.substring(0, i) === reverseStr) {
      substr = str.substring(0, i);
    }
  }
  return substr;
}