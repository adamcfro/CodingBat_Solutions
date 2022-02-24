/**
 * Returns a string with the first or last characters removed if they are 'x', otherwise returns the string unchanged.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a modified string
 */
function withoutX (str) {
  switch (true) {
    case str[0] === 'x' && str[str.length - 1] === 'x':
      return str.substring(1, str.length - 1);
    case str[0] === 'x':
      return str.substring(1);
    case str[str.length - 1] === 'x':
      return str.substring(0, str.length - 1);
    default:
      return str;
  }
}