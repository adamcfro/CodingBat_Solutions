/**
 * Returns an array where each string from the parameter has
 * 'y' added at its start and end.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a new array of strings
 */
function moreY (arr) {
  let modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    modifiedArray.push('y' + arr[i] + 'y');
  }
  return modifiedArray;
}