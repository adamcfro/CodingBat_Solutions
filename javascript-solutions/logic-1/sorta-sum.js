/**
 * Returns the sum of two numbers, unless the sum is in the range 10-19, 
 * in which case returns 20.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function sortaSum (num1, num2) {
  let sumTotal = num1 + num2;
  if (sumTotal >= 10 && sumTotal <= 19) {
    return 20;
  }
  return sumTotal;
}