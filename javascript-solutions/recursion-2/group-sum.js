/**
 * Uses recursion to check if it is possible for a group of numbers 
 * in an array to sum to the given target.
 * 
 * @param {Number} start - The starting index
 * @param {Array} arr - An array of numbers
 * @param {Number} target - A target sum
 * @returns {Boolean} - Returns a Boolean
 */
function groupSum (start, arr, target) {
  if (start >= arr.length) {
    return target === 0;
  }
  return groupSum(start + 1, arr, target - arr[start]) || 
    groupSum(start + 1, arr, target);
}