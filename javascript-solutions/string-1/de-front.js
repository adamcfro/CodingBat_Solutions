/**
 * Returns a string without the first two characters, except keeps the first 
 * character of the string if it is an 'a', and keeps the second character if 
 * it is a 'b'. 
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a string
 */
function deFront (str) {
  let newString = '';
  if (str[0] === 'a') {
    newString += 'a';
  }
  if (str[1] === 'b') {
    newString += 'b';
  }
  newString += str.substring(2);
  return newString;
}