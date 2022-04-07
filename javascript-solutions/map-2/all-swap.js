/**
 * Takes an array of strings and returns the array as follows:
 * if the first character of a string matches an earlier string in the array,
 * swap the two strings in the array. When a position in the array has been
 * swapped, it no longer matches anything.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function allSwap (arr) {
  let j = 1;
  let holdString = '';
  let usedIndexes = [];
  for (let i = 0; i < arr.length; j++) {
    if (j === arr.length) {
      i++;
      j = i;
    } else if (usedIndexes.includes(i)) {
      i++;
      j = i;
    } else if (arr[i][0] === arr[j][0]) {
      holdString = arr[i];
      arr[i] = arr[j];
      arr[j] = holdString;
      usedIndexes.push(i);
      usedIndexes.push(j);
      i++;
      j = i;
    }
  }
  return arr;
}