/**
 * Returns a new array double the length of the original array, where the last element of the parameter is the last element in the new array, and all other elements are 0.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Array}           Returns a modified array
 */
function makeLast (arr) {
  let newArr = Array((arr.length * 2) - 1).fill(0);
  newArr.push(arr[arr.length - 1]);
  return newArr;
}