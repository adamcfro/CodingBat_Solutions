/**
 * Returns a new array with the first element of each array, 
 * ignoring arrays of length 0.
 * 
 * @param {Array} arr1 - First array parameter
 * @param {Array} arr2 - Second array parameter
 * @returns {Array} - Returns a modified array
 */
function front11 (arr1, arr2) {
  let newArr = [];
  if (arr1.length !== 0) {
    newArr.push(arr1[0]);
  }
  if (arr2.length !== 0) {
    newArr.push(arr2[0]);
  }
  return newArr;
}