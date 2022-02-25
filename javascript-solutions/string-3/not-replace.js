/**
 * Returns a string where every appearance of the lowercase word 'is' has been 
 * replaced with 'is not'. The word 'is' should not be immediately preceded or 
 * followed by a letter.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a new string
 */
function notReplace (str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if ((i - 1 >= 0 && isLetter(str[i - 1]))
    || i + 2 < str.length && isLetter(str[i + 2])) {
      newStr += str[i];
    } else if (i + 1 < str.length && str.substring(i, i + 2) === 'is') {
      newStr += 'is not';
      i += 1;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

/**
 * Returns true if a character is a letter a-z, uppercase or lowercase.
 * 
 * @param {String} char       A string character
 * @returns {Boolean}         Returns a Boolean
 */
function isLetter(char) {
  return (/[a-zA-Z]/).test(char);
}