/**
 * Returns the first character of the parameter if fromFront is true, otherwise 
 * returns the last character.
 * 
 * @param {String} str - A string parameter
 * @param {Boolean} fromFront - Whether the character comes from the front
 * @returns {String} - Returns a string character
 */
function theEnd (str, fromFront) {
  if (fromFront) {
    return str[0];
  } else {
    return str[str.length - 1];
  }
}