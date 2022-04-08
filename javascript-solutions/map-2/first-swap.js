/**
 * Returns an array as follows:
 * if the first character of a string in the array matches an earlier string
 * in the array, swap the two strings in the array.
 * A particular first character can only cause one swap, so once a character
 * has caused a swap, its later swaps are disabled.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function firstSwap (arr) {
  let charArray = [];
  let holdString = '';
  for (let i = 0, j = 1; i < arr.length; j++) {
    if (j === arr.length) {
      i++;
      j = i;
    } else if (charArray.includes(arr[i][0])) {
      i++;
      j = i;
    } else if (arr[i][0] === arr[j][0]) {
      holdString = arr[i];
      arr[i] = arr[j];
      arr[j] = holdString;
      charArray.push(arr[i][0]);
      charArray.push(arr[i][0]);
      i++;
      j = i;
    }
  }
  return arr;
}