/**
 * Start with two arrays of strings, A and B, each with its elements in 
 * alphabetical order and without duplicates. Return a new array containing the 
 * first N elements from the two arrays. The result array should be in 
 * alphabetical order and without duplicates. A and B will both have a length 
 * which is N or more.
 * 
 * @param {Array} arr1        First array of strings
 * @param {Array} arr2        Second array of strings
 * @param {Number} n          Length of array
 * @returns {Array}           Returns a new array
 */
function mergeTwo (arr1, arr2, n) {
  let newArr = [];
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr1[index1] < arr2[index2]) {
      newArr[i] = arr1[index1];
      index1 += 1;
    } else if (arr1[index1] > arr2[index2]) {
      newArr[i] = arr2[index2];
      index2 += 1;
    } else {
      newArr[i] = arr1[index1];
      index1 += 1;
      index2 += 1;
    }
  }
  return newArr;
}
