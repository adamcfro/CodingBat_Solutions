/**
 * Returns the larger of two parameters, unless they are equal then returns 0, or returns the smaller value if the two parameters have the same remainder when divided by 5.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @returns {Number}          Returns a number
 */
function maxMod5 (num1, num2) {
  let returnValue;
  if (num1 === num2) {
    returnValue = 0;
  } else if ((num1 % 5) === (num2 % 5)) {
    returnValue = (num1 <= num2) ? num1 : num2;
  } else {
    returnValue = (num1 >= num2) ? num1 : num2;
  }
  return returnValue;
}