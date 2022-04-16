/**
 * Recursively computes and returns true if the string has a nesting
 * of zero or more pairs of parenthesis.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function nestParen (str) {
  if (str.length === 0) {
    return true;
  }
  if (str[0] === '(' && str[str.length - 1] === ')') {
    return nestParen(str.substring(1, str.length - 1));
  }
  return false;
}