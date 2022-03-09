/**
 * Given n>=0, create an array with the pattern 
 * {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n}.
 * 
 * @param {Number} num - A number parameter
 * @returns {Array} - Returns a patterned array
 */
function seriesUp (num) {
  let newArray = [];
  for (let i = 1, j = 1; i <= num; i++) {
    if (i === num) {
      newArray.push(i);
      return newArray;
    } else if (i === j) {
      newArray.push(i);
      i = 0;
      j += 1;
    } else {
      newArray.push(i);
    }
  }
}
