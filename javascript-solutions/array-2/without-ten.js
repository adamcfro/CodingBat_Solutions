/**
 * Returns a modified array where all elements that are not 10's  are shifted 
 * to the front of the array, and all 10's have been replaced by 0's 
 * at the end of the array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function withoutTen (arr) {
  let index = 0;
  let newArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 10) {
      newArr[index] = arr[i];
      index += 1;
    }
  }
  for (let i = index; i < arr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}