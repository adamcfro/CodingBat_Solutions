/**
 * Returns true if either digit from the first paramter appears 
 * in the second parameter.
 * 
 * @param {Number} num1 - First number parameter 
 * @param {Number} num2 - Second number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function shareDigit (num1, num2) {
  let num1Left = Math.floor(num1 / 10);
  let num1Right = num1 % 10;
  let num2Left = Math.floor(num2 / 10);
  let num2Right = num2 % 10;
  return ((num1Left === num2Left) || (num1Left === num2Right) || (num1Right === num2Left) || (num1Right === num2Right))
}