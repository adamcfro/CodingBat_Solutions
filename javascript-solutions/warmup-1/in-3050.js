/**
 * Checks if both parameters are within the range 30-40 or 40-50 and 
 * returns true if so, false otherwise.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function in3050 (num1, num2) {
  if ((num1 >= 30 && num1 <= 40) && (num2 >= 30 && num2 <= 40)) {
    return true;
  } else if ((num1 >= 40 && num1 <= 50) && (num2 >= 40 && num2 <= 50)) {
    return true;
  } else {
    return false;
  }
}