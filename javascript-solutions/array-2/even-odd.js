/**
 * Returns an array where all even numbers are moved to the front of the 
 * array, and all odd numbers are moved to the back.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a new array
 */
function evenOdd (arr) {
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr.slice(i, i + 1)[0]);
    } else {
      oddArr.push(arr.slice(i, i + 1)[0]);
    }
  }
  return evenArr.concat(oddArr);
}