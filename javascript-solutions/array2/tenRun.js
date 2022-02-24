/**
 * Returns a new array, where for each element that is a multiple of 10, all following elements are changed to that number. This repeats until encountering another multiple of 10, where all values after are correspondingly changed to that number.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a new array
 */
function tenRun (arr) {
  let newArr = [];
  let mult10;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      mult10 = arr[i];
      newArr.push(mult10);
    } else if (mult10) {
      newArr.push(mult10);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}