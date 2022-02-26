/**
 * Returns a new string made up of every other character, starting with the first.
 * 
 * @param {String} str      A string parameter
 * @returns {String}        Returns a new string
 */
function stringBits (str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newString += str[i];
    }
  }
  return newString;
}