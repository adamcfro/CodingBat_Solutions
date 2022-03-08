/**
 * Recursively computes and returns the factorial of the parameter number.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns the product of a factorial
 */
function factorial (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}