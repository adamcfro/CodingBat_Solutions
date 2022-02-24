/**
 * Returns the sum of two parameters, unless the length of the sum is greater than the length of the first parameter, in which case returns the first parameter.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @returns {Number}          Returns a sum
 */
function sumLimit (num1, num2) {
  let total = num1 + num2;
  if (total.toString().length > num1.toString().length) {
    return num1;
  } else {
    return total;
  }
}