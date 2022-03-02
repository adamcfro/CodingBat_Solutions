/**
 * Returns true if an array contains either 3 even or 3 odd values 
 * all next to each other.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function modThree (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
      return true;
    } else if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true;
    }
  }
  return false;
}