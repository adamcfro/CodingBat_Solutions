/**
 * Returns a new string with any instance of 'yak' removed, where the middle character can be anything.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a new string
 */
function stringYak (str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'y' && str[i + 2] === 'k') {
      i += 2;
    } else {
      newString += str[i];
    }
  }
  return newString;
}