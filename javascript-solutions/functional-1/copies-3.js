/**
 * Returns a list where each string from the parameter is replaced
 * by 3 copies of the string concatenated together.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a new array
 */
function copies3 (arr) {
  let copiesArray = [];
  for (let i = 0; i < arr.length; i++) {
    copiesArray.push(arr[i].repeat(3));
  }
  return copiesArray;
}