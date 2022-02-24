/**
 * Returns a new array with all elements set to equal the higher value between the first and last element of the array.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Array}           Returns a modified array
 */
function maxEnd3 (arr) {
  let higherNum = (arr[0] >= arr[arr.length - 1]) ? arr[0] : arr[arr.length - 1];
  let changedArr = [];
  for (let i = 0; i < arr.length; i++) {
    changedArr.push(higherNum);
  }
  return changedArr;
}