/**
 * Returns a sum of the number digits that appear in a string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - A sum number
 */
function sumDigits (str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      total += parseInt(str[i]);
    }
  }
  return total;
}