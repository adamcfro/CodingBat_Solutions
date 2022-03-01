/**
 * Checks the first two positions of a string to see if they match 'o' 
 * for index 1, and 'z' for index 2. Each of the characters that 
 * matches are added to a new string and returned.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a new string
 */
function startOz (str) {
  let newString = '';
  if (str[0] === 'o') {
    newString += 'o';
  } 
  if (str[1] === 'z') {
    newString += 'z';
  }
  return newString;
}