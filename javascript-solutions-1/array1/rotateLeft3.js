/**
 * Returns an array with the first element shifted off and pushed on the back of the array.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Array}           Returns a modified array
 */
function rotateLeft3 (arr) {
  let leftElem = arr.shift();
  arr.push(leftElem);
  return arr;
}