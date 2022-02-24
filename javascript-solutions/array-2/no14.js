/**
 * Returns true if the array contains no 1's or it contains no 4's.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function no14 (arr) {
  let noOnes = true;
  let noFours = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      noOnes = false;
    } else if (arr[i] === 4) {
      noFours = false;
    }
  }
  return (noOnes && noFours) || noOnes || noFours;
}