/**
 * Uses recursion to determine if an array of numbers can be summed evenly
 * into two groups. Every number must be used once, going only into one group.
 * Calls a helper function to handle the math.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function splitArray (arr) {
  return splitArrayHelper(0, arr, 0, 0);
}

/**
 * A helper function that tries to sum an array of numbers into two
 * groups evenly.
 * 
 * @param {Number} index - The current index
 * @param {Array} arr - An array of numbers
 * @param {Number} sum1 - First sum of numbers
 * @param {Number} sum2 - Second sum of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function splitArrayHelper (index, arr, sum1, sum2) {
  if (index >= arr.length) {
    return sum1 === sum2;
  }
  return splitArrayHelper(index + 1, arr, sum1 + arr[index], sum2) || splitArrayHelper(index + 1, arr, sum1, sum2 + arr[index]);
}