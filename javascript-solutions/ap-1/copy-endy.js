/**
 * Returns a new array consisting of the first 'count' numbers that are 
 * between the range 0-10 inclusive or 90-100 inclusive.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} count - The count of numbers to add to new array
 * @returns {Array} - Returns a new array of numbers
 */
function copyEndy (arr, count) {
  let endyNums = [];
  for (let i = 0; endyNums.length < count; i++) {
    if ((arr[i] >= 0 && arr[i] <= 10) || (arr[i] >= 90 && arr[i] <= 100)) {
      console.log(arr[i]);
      endyNums.push(arr[i]);
    }
  }
  return endyNums;
}