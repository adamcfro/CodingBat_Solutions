/**
 * Returns true if the rightmost digit in any number parameter is the same as the rightmost digit in any other number parameter.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function lastDigit (num1, num2, num3) {
  if ((num1 % 10 === num2 % 10) || (num1 % 10 === num3 % 10)) {
    return true;
  }
  return false;
}