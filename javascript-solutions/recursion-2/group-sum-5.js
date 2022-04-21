/**
 * Uses recursion to check if the number in the given array can sum up to
 * the target parameter, with the following restraints:
 * all multiples of 5 in the array must be included. If the value immediately
 * following a multiple of 5 is 1, it must not be chosen.
 * 
 * @param {Number} start - The starting index
 * @param {Array} arr - An array of numbers
 * @param {Number} target - The target sum
 * @returns {Boolean} - Returns true if the target can be met
 */
function groupSum5 (start, arr, target) {
  if (start >= arr.length) {
    return target === 0;
  }
  if (arr[start] % 5 === 0) {
    if (start < arr.length && arr[start + 1] === 1) {
      return groupSum5(start + 2, arr, target - arr[start]);
    } else {
      return groupSum5(start + 1, arr, target - arr[start]);
    }
  }
  return groupSum5(start + 1, arr, target - arr[start]) ||
    groupSum5(start + 1, arr, target);
}