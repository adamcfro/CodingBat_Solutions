/**
 * Recursively returns the sum of the digits of a non-negative number.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a sum
 */
function sumDigits (num) {
  if (num === 0) {
    return 0;
  }
  return num % 10 + sumDigits(Math.floor(num / 10));
}