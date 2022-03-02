/**
 * Returns the sum of the numbers appearing in a string. A number consists of 1 
 * or more digit characters in a row.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a sum
 */
function sumNumbers (str) {
  let total = 0;
  let tempStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      tempStr += str[i];
    } else {
      total += tempStr === '' ? 0 : (parseInt(tempStr));
      tempStr = '';
    }
  }
  total += tempStr === '' ? 0 : (parseInt(tempStr));
  return total;
}