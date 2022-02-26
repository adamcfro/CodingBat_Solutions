/**
 * Returns a string with all 'x' removed, but keeps any 'x' that is the first or last character in the string, 
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a new string
 */
function stringX (str) {
  let newString = '';
  console.log(str.length - 1);
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || i === str.length - 1) {
      newString += str[i];
    } else if (str[i] !== 'x') {
      newString += str[i];
    } else {
      continue;
    }
  }
  return newString;
}