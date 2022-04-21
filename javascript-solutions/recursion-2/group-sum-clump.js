/**
 * Uses recursion to check if there is a group of numbers that sums to the
 * target parameter, with the following restraint:
 * if there are numbers in the array that are adjacent and have the identical
 * value, they must either all be chosen, or none of them chosen.
 * 
 * @param {Number} start - The starting index
 * @param {Array} arr - An array of numbers
 * @param {Number} target - The target sum
 * @returns {Boolean} - Returns true if the target can be met
 */
function groupSumClump (start, arr, target) {
  if (start >= arr.length) {
    return target === 0;
  }
  if (arr[start] === arr[start + 1] || arr[start] === arr[start - 1]) {
    return groupSumClump(start + 1, arr, target - arr[start]);
  }
  return groupSumClump(start + 1, arr, target - arr[start]) || 
    groupSumClump(start + 1, arr, target);
}