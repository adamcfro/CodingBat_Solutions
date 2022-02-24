/**
 * Given an array of scores sorted in increasing order, returns true if the array contains three adjacent numbers that differ from each other by at most 2.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function scoresClump (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2] - arr[i] <= 2) {
      return true;
    }
  }
  return false;
}