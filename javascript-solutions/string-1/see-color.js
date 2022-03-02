/**
 * Checks if a string begins with 'red' or 'blue' and returns that color if so, 
 * otherwise returns an empty string.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function seeColor (str) {
  if (str.substring(0, 3) === 'red') {
    return str.substring(0, 3);
  } else if (str.substring(0, 4) === 'blue') {
    return str.substring(0, 4);
  } else {
    return '';
  }
}