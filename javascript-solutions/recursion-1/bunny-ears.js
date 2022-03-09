/**
 * Computes the total number of bunny ears recursively.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns the number of bunny ears
 */
function bunnyEars (num) {
  if (num === 0) {
    return 0;
  }
  return 2 + bunnyEars(num - 1);
}