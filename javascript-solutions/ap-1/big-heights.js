/**
 * Returns a count of the number of adjacent elements that differ 
 * by 5 or more, starting at the start index and ending at the end index.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} start - A starting index
 * @param {Number} end - An ending index
 * @returns {Number} - Returns a count of the number of adjacent elements that 
 *     differ by 5 or more
 */
function bigHeights (arr, start, end) {
  let bigSteps = 0;
  for (let i = start; i < end; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) >= 5) {
      bigSteps += 1;
    }
  }
  return bigSteps;
}