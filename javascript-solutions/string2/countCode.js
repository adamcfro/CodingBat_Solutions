/**
 * Returns the number of times the substring 'code' appears in the string parameter, except the 'd' can be any letter.
 * 
 * @param {String} str        A string parameter
 * @returns {Number}          Returns a count
 */
function countCode (str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 2) === 'co' && str[i + 3] === 'e') {
      total += 1;
    }
  }
  return total;
}