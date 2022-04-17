/**
 * Uses recursion to check if it possible for a group of numbers in an array
 * to sum to the given
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
  if (groupSum(start + 1, arr, target - arr[start])) {
    return true;
  }
  if (groupSum(start + 1, arr, target)) {
    return true;
  }
  return false;
}