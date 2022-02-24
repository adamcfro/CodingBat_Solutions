/**
 * Returns a modified array containing all elements that come before the first 4.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a modified array
 */
function pre4 (arr) {
  let endSlice = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      break;
    } else {
      endSlice += 1;
    }
  }
  return arr.slice(0, endSlice);
}