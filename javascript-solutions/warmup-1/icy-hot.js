/**
 * Returns true if one paramter is less than 0 and the other parameter 
 * is greater than 100.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function icyHot (num1, num2) {
  if ((num1 < 0 && num2 > 100) || (num2 < 0 && num1 > 100)) {
    return true;
  } else {
    return false;
  }
}