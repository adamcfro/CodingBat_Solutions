/**
 * Returns an array containing the numbers 0...n-1. If the number parameter 
 * is 0, returns an array length 0.
 * 
 * @param {Number} n - A number parameter
 * @returns {Array} - Returns a new array
 */
function fizzArray (n) {
  let newArr = [];
  console.log(newArr);
  for (let i = 0; i < n; i++) {
    newArr[i] = i;
  }
  return newArr;
}