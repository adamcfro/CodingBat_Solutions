/**
 * Returns an array where the leftmost element has been shifted and pushed to the back of the array.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a modified array
 */
function shiftLeft (arr) {
  if (arr.length > 0) {
    let firstNum = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstNum;
  }
  return arr;
}