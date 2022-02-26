/**
 * Returns an array of the first two elements from the original array.
 * 
 * @param {Array} arr         An array parameter 
 * @returns {Array}           A modified array
 */
function frontPiece (arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    return arr.slice(0, 2);
  }
}