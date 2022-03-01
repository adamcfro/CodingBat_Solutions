/**
 * Returns true if either number parameter is in the range of 10-20 inclusive.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function in1020 (num1, num2) {
  if ((num1 >= 10 && num1 <= 20) || (num2 >= 10 && num2 <= 20)) {
    return true;
  } else {
    return false;
  }
}