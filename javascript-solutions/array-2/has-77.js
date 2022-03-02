/**
 * Returns true if an array contains two 7's next to each other, 
 * or there are two 7's separated by one element.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function has77 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 7 && arr[i + 1] === 7) || (arr[i] === 7 && arr[i + 2] === 7)) {
      return true;
    }
  }
  return false;
}