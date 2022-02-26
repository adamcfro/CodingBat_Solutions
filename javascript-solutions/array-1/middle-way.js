/**
 * Given a set of odd length arrays, eturns a new array with the middle elements from each array.
 * 
 * @param {Array} arr1         First array parameter
 * @param {Array} arr2         Second array parameter
 * @returns {Array}            Returns a new array
 */
function middleWay (arr1, arr2) {
  let newArr = [];
  newArr.push(arr1[Math.floor(arr1.length / 2)]);
  newArr.push(arr2[Math.floor(arr2.length / 2)]);
  return newArr;
}