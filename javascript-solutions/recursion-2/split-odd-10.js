/**
 * Uses recursion to divide an array of numbers into two groups,
 * so that the sum of one group is a multiple of 10, and the sum
 * of the other group is odd. Every number must be in one group or another.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function splitOdd10 (arr) {
  return splitOdd10Helper(0, arr, 0, 0);
}

/**
 * Helper function to split numbers into groups.
 * 
 * @param {Number} index - The current index
 * @param {Array} arr - An array of numbers
 * @param {Number} sum1 - A sum of numbers checked for being a multiple of 10 
 * @param {Number} sum2 - A sum of numbers checked for being odd
 * @returns {Boolean} - Returns a Boolean
 */
function splitOdd10Helper (index, arr, sum1, sum2) {
  if (index >= arr.length) {
    return sum1 % 10 === 0 && sum2 % 2 === 1;
  }
  return splitOdd10Helper(index + 1, arr, sum1 + arr[index], sum2) || 
    splitOdd10Helper(index + 1, arr, sum1, sum2 + arr[index]);
}