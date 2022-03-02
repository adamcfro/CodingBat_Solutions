/**
 * Returns true if either parameter is 6, or the sum or difference between 
 * the two parameters is 6.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function love6 (num1, num2) {
  return ((num1 === 6) || (num2 === 6) || (Math.abs(num1 - num2) === 6) || (num1 + num2 === 6));
}