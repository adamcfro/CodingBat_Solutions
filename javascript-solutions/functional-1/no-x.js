/**
 * Returns a new array, where each 'x' from the original array
 * of strings has been removed.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a new array of strings
 */
function noX (arr) {
  let modArray = [];
  for (let i = 0; i < arr.length; i++) {
    modArray.push(arr[i].replace(/x/g, ''));
  }
  return modArray;
}