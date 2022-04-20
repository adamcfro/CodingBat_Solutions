/**
 * Uses recursion to check if it is possible for the numbers in the given
 * array to sum to the target parameter, with the following restraint:
 * if a value in the array is chosen to be in the group, the value immediately
 * following it in the array must not be chosen.
 * 
 * @param {Number} start - The starting index
 * @param {Number} arr - An array of numbers
 * @param {Number} target - The target sum
 * @returns {Boolean} - Returns true if the target sum can be met
 */
function groupNoAdj (start, arr, target) {
  if (start >= arr.length) {
    return target === 0;
  }
  return groupNoAdj(start + 2, arr, target - arr[start]) || 
    groupNoAdj(start + 1, arr, target);
}