/**
 * Returns true if each number in an array is greater than or equal to the previous number in the array.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function scoresIncreasing (arr) {
  let prevScore = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= prevScore) {
      prevScore = arr[i];
    } else {
      return false;
    }
  }
  return true;
}