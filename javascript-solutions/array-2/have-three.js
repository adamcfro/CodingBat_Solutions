/**
 * Returns true if the value 3 appears in an array exactly three times, 
 * and there are no 3's next to each other.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function haveThree (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 && arr[i + 1] === 3) {
      return false;
    } else if (arr[i] === 3 && arr[i + 1] !== 3) {
      total += 1;
    }
  }
  return total === 3;
}