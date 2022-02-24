/**
 * Checks if either of the first two characters of a string are 'x', and returns the string without those 'x' characters. Otherwise, returns the string unchanged.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a modified string
 */
function withoutX2 (str) {
  switch (true) {
    case (str[0] === 'x' && str[1] === 'x'):
      return str.substring(2);
    case (str[0] === 'x'):
      return str.substring(1);
    case (str[1] === 'x'):
      return str.substring(0, 1) + str.substring(2);
    default:
      return str;
  }
}