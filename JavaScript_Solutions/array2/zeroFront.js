/**
 * Returns a rearranged array, with all 0's grouped to the start of the array.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a modified array
 */
function zeroFront (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = arr[count];
      arr[count] = 0;
      count += 1;
    }
  }
  return arr;
}