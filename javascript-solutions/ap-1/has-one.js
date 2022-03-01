/**
 * Returns true if the number parameter has a 1 in it.
 * 
 * @param {Number} num - A number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function hasOne (num) {
  while (num != 0) {
    if (num % 10 === 1) {
      return true;
    } else {
      num = Math.floor(num / 10);
    }
  }
  return false;
}