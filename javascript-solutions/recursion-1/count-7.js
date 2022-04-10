/**
 * Returns the count of occurrences of 7 as a digit in a non-negative number.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a count number
 */
function count7 (num) {
  if (num === 0) {
    return 0;
  }
  if (num % 10 === 7) {
    return 1 + count7(Math.floor(num / 10));
  }
  return count7(Math.floor(num / 10));
}