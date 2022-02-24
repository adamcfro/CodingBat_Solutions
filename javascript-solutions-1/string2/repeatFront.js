/**
 * The first n characters of a string are added to a new string. Then n decrements by 1 and the first n characters are added to the string once again, until n reaches 0. Returns the new string.
 * 
 * @param {String} str        A string parameter
 * @param {Number} n          Number of characters added
 * @returns {String}          Returns a new string
 */
function repeatFront (str, n) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (n > 0) {
      newStr += str.substring(0, [n]);
      n -= 1;
    }
  }
  return newStr;
}