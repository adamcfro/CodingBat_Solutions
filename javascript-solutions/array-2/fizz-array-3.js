/**
 * Returns a new array containing the sequence of numbers from start up to, 
 * but not including, end.
 * 
 * @param {Number} start - First number of new array
 * @param {Number} end - Number, not included, where array ends
 * @returns {Array} - Returns a new array
 */
function fizzArray3 (start, end) {
  let newArr = [];
  for (let i = start; i < end; i++) {
    newArr.push(i);
  }
  return newArr;
}