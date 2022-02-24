/**
 * Checks if the last digit of two parameters is the same.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function lastDigit (num1, num2) {
  if (num1 % 10 === num2 % 10) {
    return true;
  } else {
    return false;
  }
}