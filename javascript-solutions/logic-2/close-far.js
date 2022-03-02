/**
 * Returns true if num2 or num3 is within 1 of num1, and the other parameter is 
 * at least 2 away from both other parameters.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function closeFar (num1, num2, num3) {
  return ((Math.abs(num3 - num2) >= 2) && ((Math.abs(num3 - num1) <= 1) || (Math.abs(num2 - num1) <= 1)));
}