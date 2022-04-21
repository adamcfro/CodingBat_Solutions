/**
 * Uses recursion to check if it is possible for the numbers in the given
 * array to sum to the given target.
 * 
 * @param {Number} start - The starting index
 * @param {Array} arr - An array of numbers
 * @param {Number} target - The target sum
 * @returns {Boolean} - Returns true if the target can be met
 */
function groupSum6 (start, arr, target) {
  if (start >= arr.length) {
    return target === 0;
  }
  if (arr[start] === 6) {
    return groupSum6(start + 1, arr, target - 6);
  }
  return groupSum6(start + 1, arr, target - arr[start]) ||
    groupSum6(start + 1, arr, target);
}