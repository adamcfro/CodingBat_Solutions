/**
 * Returns a count of the number of arrays where 1 is the first element.
 * 
 * @param {Array} arr1        First array parameter 
 * @param {Array} arr2        Second array parameter
 * @returns {Number}          Returns a count
 */
function start1 (arr1, arr2) {
  let count = 0;
  if (arr1[0] === 1 && arr2[0] === 1) {
    count += 2;
  } else if (arr1[0] === 1) {
    count += 1;
  } else if (arr2[0] === 1) {
    count += 1;
  }
  return count;
}