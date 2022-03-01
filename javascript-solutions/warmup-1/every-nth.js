/**
 * Returns a new string with every nth character removed
 * 
 * @param {String} str - A string parameter
 * @param {Number} num - The nth number in a string
 * @returns {String} - Returns a new string
 */
function everyNth (str, num) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (i % num === 0) {
      newString += str[i];
    }
  }
  return newString;
}