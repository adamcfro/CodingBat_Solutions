/**
 * Returns the mean average of the values in the array, while ignoring the one largest number and the one smallest number.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns a median number
 */
function centeredAverage (arr) {
  let smallNum = arr[0];
  let largeNum = arr[0];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    } else if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
    total += arr[i];
  }
  return Math.round((total - smallNum - largeNum) / (arr.length - 2));
}