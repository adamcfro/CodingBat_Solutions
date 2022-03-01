/**
 * Returns the sum of two numbers, or double the sum 
 * if the two numbers are the same.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Number} - Returns a sum
 */
function sumDouble (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 2;
  } else {
    return num1 + num2;
  }
}