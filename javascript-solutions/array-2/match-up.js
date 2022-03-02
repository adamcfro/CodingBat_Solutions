/**
 * Given two arrays of same length, returns a count of the number of times 
 * the elements at index[i] in both parameters differ by less than 2, 
 * but are not equal.
 * 
 * @param {Array} arr1 - First array of numbers
 * @param {Array} arr2 - Second array of numbers
 * @returns {Number} - Returns a count
 */
function matchUp (arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] !== arr2[i]) && (Math.abs(arr1[i] - arr2[i]) <= 2)) {
      total += 1;
    }
  }
  return total;
}