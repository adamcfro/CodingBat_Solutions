/**
 * Returns the highest value in an array when looking at the first, middle, and last elements.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns the highest value
 */
function maxTriple (arr) {
  let middleIndex = Math.floor(arr.length / 2);
  let highestValue = (arr[0] >= arr[middleIndex]) ? arr[0] : arr[middleIndex];
  highestValue = (highestValue >= arr[arr.length - 1]) ? highestValue : arr[arr.length - 1];
  return highestValue;
}