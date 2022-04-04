/**
 * Returns a list where each string from the parameter array
 * has '*' added to its end.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function addStar (arr) {
  let modArray = [];
  for (let i = 0; i < arr.length; i++) {
    modArray.push(arr[i] + '*');
  }
  return modArray;
}