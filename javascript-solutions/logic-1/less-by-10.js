/**
 * Returns true if the difference between any two parameters is greater than 
 * or equal to 10.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function lessBy10 (num1, num2, num3) {
  return ((Math.abs(num1 - num2) >= 10) || (Math.abs(num1 - num3) >= 10) || (Math.abs(num1 - num2) >= 10));
}