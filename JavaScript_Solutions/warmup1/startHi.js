/**
 * Returns true if the string starts with "hi", returns false otherwise
 * 
 * @param {String} str    A string parameter
 * @returns {Boolean}     Returns a Boolean
 */
function startHi (str) {
  if (str.substring(0, 2) === 'hi') {
    return true;
  } else {
    return false;
  }
}