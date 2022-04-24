/**
 * Uses recursion to check if it is possible to divide the numbers in an array
 * into two groups so that their sums are equal. All values that are multiples
 * of 5 must be in one group, and all values that are a multiple of 3, 
 * but not a multiple of 5, must be in the other group.
 * 
 * @param {Array} arr - An array of number
 * @returns {Boolean} - Returns a Boolean
 */
function split53 (arr) {
  return split53Helper(0, arr, 0, 0);
}

/**
 * A helper function that tries to divide numbers from an array
 * into two groups with equal sums.
 * 
 * @param {Number} index - The current index
 * @param {Array} arr - An array of numbers
 * @param {Number} sum1 - First sum, contains values that are multiples of 5
 * @param {Number} sum2 - Second sum, contains values that are multiples of 3
 * @returns {Boolean} - Returns a Boolean
 */
function split53Helper (index, arr, sum1, sum2) {
  if (index >= arr.length) {
    return sum1 === sum2;
  }
  if (arr[index] % 5 === 0) {
    return split53Helper(index + 1, arr, sum1 + arr[index], sum2);
  }
  if (arr[index] % 3 === 0 && arr[index % 5 !== 0]) {
    return split53Helper(index + 1, arr, sum1, sum2 + arr[index]);
  }
  return split53Helper(index + 1, arr, sum1 + arr[index], sum2) || split53Helper(index + 1, arr, sum1, sum2 + arr[index]);
}