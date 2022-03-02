/**
 * Compares two arrays of strings and returns a count of the number of 
 * times the string at arr1[i] has the same first character as the string 
 * at arr2[i];
 * 
 * @param {Array} arr1 - First array of strings
 * @param {Array} arr2 - Second array of strings
 * @returns {Number} - Returns a count number
 */
function matchUp (arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length > 0 && arr1[i][0] === arr2[i][0]) {
      count += 1;
    }
  }
  return count;
}