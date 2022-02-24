/**
 * Returns the sum of elements in array of length 3.
 * 
 * @param {Array} arr          An array of numbers
 * @returns {Number}           Returns the sum of elements
 */
function sum3 (arr) {
  if (arr.length != 3) {
    return "Array is not length 3."
  }
  let sumTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumTotal += arr[i];
  }
  return sumTotal;
}