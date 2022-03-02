/**
 * Returns true if for every pair of adjacent elements in the array, 
 * at least one of the pair is the number parameter.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} num - A number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function isEverywhere (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num && arr[i + 1] !== num && arr[i + 1] !== undefined) {
      return false;
    }
  }
  return true;
}