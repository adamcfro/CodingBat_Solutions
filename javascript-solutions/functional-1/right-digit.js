/**
 * Returns an array of the rightmost digits from each integer
 * from the original array parameter.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a new array of numbers
 */
function rightDigit (arr) {
  let modArray = [];
  for (let i = 0; i < arr.length; i++) {
    modArray.push(arr[i] % 10);
  }
  return modArray;
}