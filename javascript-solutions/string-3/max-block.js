/**
 * Returns the length of the largest block of string that consists of the same character.
 * 
 * @param {String} str        A string parameter
 * @returns {Number}          A count number
 */
function maxBlock (str) {
  let total = str.length > 0 ? 1: 0;
  let blockLetter = str[0];
  for (let i = 0; i < str.length; i++) {
    blockLetter = str[i];
    if (str[i] === str[i + 1] && str[i] === blockLetter) {
      total += 1;
    }
  }
  return total;
}