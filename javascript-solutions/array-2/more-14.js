/**
 * Returns true if the sum of 1's in an array is greater than 
 * the number of 4's.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function more14 (arr) {
  let sumOnes = 0;
  let numFours = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sumOnes += arr[i];
    } else if (arr[i] === 4) {
      numFours += 1;
    }
  }
  return sumOnes > numFours;
}