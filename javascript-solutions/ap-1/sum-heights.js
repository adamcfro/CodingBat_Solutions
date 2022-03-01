/**
 * Returns the sum of the difference between adjacent numbers, starting at the 
 * start index and ending at the end index.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} start - A starting index
 * @param {Number} end - An ending index
 * @returns {Number} - Returns a sum
 */
function sumHeights (arr, start, end) {
  let totalChange = 0;
  for (let i = start; i < end; i++) {
    totalChange += Math.abs(arr[i] - arr[i + 1]);
  }
  return totalChange;
}