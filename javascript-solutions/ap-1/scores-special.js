/**
 * Returns the sum of the largest multiple of 10 from each array parameter.
 * 
 * @param {Array} arr1 - First array of numbers
 * @param {Array} arr2 - Second array of numbers
 * @returns {Number} - Returns a sum
 */
function scoresSpecial (arr1, arr2) {
  return largestSpecial(arr1) + largestSpecial(arr2);
}


/**
 * Returns the largest multiple of 10 in an array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns the largest multiple of 10
 */
function largestSpecial (arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0 && arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}