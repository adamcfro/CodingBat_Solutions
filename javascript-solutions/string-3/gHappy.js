/**
 * Returns true if for every 'g' character in a string, there is another 'g' character immediately to its left or right.
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function gHappy (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'g' && str[i - 1] !== 'g' && str[i + 1] !== 'g') {
      return false;
    }
  }
  return true;
}