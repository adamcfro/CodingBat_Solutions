/**
 * Recursively computes and returns a new string made of only the parenthesis
 * and their contents.
 * So 'xyz(abc)123' yields '(abc)'.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function parenBit (str) {
  if (str === '') {
    return str;
  }
  if (str[0] === '(' && str[str.length - 1] === ')') {
    return str;
  } else if (str[0] === '(') {
    return parenBit(str.substring(0, str.length - 1));
  } else {
    return parenBit(str.substring(1));
  }
}