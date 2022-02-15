/**
 * Returns an array length 2 containing the first two elements from the array parameters, starting with arr1.
 * 
 * @param {Array} arr1        First array parameter
 * @param {Array} arr2        Second array parameter
 * @returns {Array}           Returns a new array
 */
function make2 (arr1, arr2) {
  let newArr = [];
  let concatArr = arr1.concat(arr2);
  let i = 0;
  while (newArr.length < 2) {
    newArr.push(concatArr[i]);
    i++;
  }
  return newArr;
}