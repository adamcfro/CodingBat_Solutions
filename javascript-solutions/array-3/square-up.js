/**
 * Given n >= 0, create an array length n*n with the following pattern:
 * (Shown here for n=3) [0, 0, 1, 0, 2, 1, 3, 2, 1]
 * 
 * @param {Number} num - A number parameter
 * @returns {Array} - An array of numbers
 */
function squareUp (num) {
  let arr = [];
  let j = num;
  for (let i = 1; i <= num; i++) {
    if (num === 0 || j === 0) {
      return arr;
    } else if (i > j && i === num) {
      arr.unshift(0);
      i = 0;
      j -= 1;
    } else if (i > j) {
      arr.unshift(0);
    } else if (i === num) {
      arr.unshift(i);
      i = 0;
      j -= 1;
    } else {
      arr.unshift(i);
    }
  }
  return arr;
}