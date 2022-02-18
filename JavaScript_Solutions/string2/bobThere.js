/**
 * Returns true if the parameter string contains the substring 'bob', where the middle 'o' can be any character.
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function bobThere (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'b' && str[i + 2] === 'b') {
      return true;
    }
  }
  return false;
}