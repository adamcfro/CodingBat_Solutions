/**
 * Checks if the substring 'bad' occurs in a string, starting at either index[0] or index[1].
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function hasBad (str) {
  if (str.substring(0, 3) === 'bad' || str.substring(1, 4) === 'bad') {
    return true;
  } else {
    return false;
  }
}