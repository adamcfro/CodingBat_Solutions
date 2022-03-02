/**
 * Returns a new array made up of the string versions of the 
 * numbers 0 through n-1.
 * 
 * @param {Number} n - A number to iterate over
 * @returns {Array} - Returns an array of strings
 */
function fizzArray2 (n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(i.toString());
  }
  return newArr;
}