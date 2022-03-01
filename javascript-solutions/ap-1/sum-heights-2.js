/**
 * Given start and end indexes of an array, returns the sum of the differences 
 * between adjacent numbers. However, increases in height count for double.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} start - A starting index
 * @param {Number} end - An ending index
 * @returns {Number} - Returns a sum
 */
function sumHeights2 (arr, start, end) {
  let altitudeChange = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] - arr[i + 1] > 0) {
      altitudeChange += Math.abs(arr[i] - arr[i + 1]);
    } else {
      altitudeChange += Math.abs(arr[i] - arr[i + 1]) * 2;
    }
  }
  return altitudeChange;
}