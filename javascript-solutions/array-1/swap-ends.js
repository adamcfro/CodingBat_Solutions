/**
 * Returns a new array with the first and last elements swapped.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Array} - Returns a modified array
 */
function swapEnds (arr) {
  let newArr = [];
  let firstElem = arr.shift();
  let lastElem = arr.pop()
  newArr.push(lastElem);
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(firstElem);
  return newArr;
}