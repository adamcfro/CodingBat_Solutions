/**
 * Return an array that contains exactly the same numbers as the given array, 
 * but rearranged so that every 3 is immediately followed by a 4. Do not move 
 * the 3's, but every other number may move. The array contains the same number 
 * of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 
 * appears in the array before any 4.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function fix34 (arr) {
  let holdNumber = 4;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === 3 && arr[i] !== 3) {
      holdNumber = arr[i];
      arr[i] = 4;
    } else if (arr[i] === 4) {
      arr[i] = holdNumber;
    }
  }
  return arr;
}