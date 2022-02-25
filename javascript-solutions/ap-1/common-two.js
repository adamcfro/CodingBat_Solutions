/**
 * Start with two arrays of strings, arr1 and arr2, each in alphabetical order, 
 * possibly with duplicates. Returns the count of the number of strings which 
 * appear in both arrays.
 * 
 * @param {Array} arr1        First array of strings
 * @param {Array} arr2        Second array of strings
 * @returns {Number}          Returns a count number
 */
function commonTwo (arr1, arr2) {
  let count = 0;
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; index1 < arr1.length && index2 < arr2.length; i++) {
    if (arr1[index1] < arr2[index2]) {
      index1 += 1;
    } else if (arr1[index1] > arr2[index2]) {
      index2 += 1;
    } else {
      count += 1;
      index2 += 1;
    }
  }
  return count;
}