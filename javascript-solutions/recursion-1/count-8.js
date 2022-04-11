/**
 * Recursively computes and returns the count of the occurrences
 * that 8 as a digit appears in a number. If another 8 appears 
 * immediately to the left of another 8, that digit counts double.
 * 
 * 
 * @param {Number} num - A non-negative number
 * @returns {Number} - Returns a count number
 */
function count8 (num) {
  if (num === 0) {
    return 0;
  }
  if (num % 10 === 8) {
    num = Math.floor(num / 10);
    if (num % 10 === 8) {
      return 3 + count8(Math.floor(num / 10 / 10));
    } else {
      return 1 + count8(Math.floor(num / 10));
    }
  } return count8(Math.floor(num / 10));
}