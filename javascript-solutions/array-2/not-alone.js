/**
 * Returns a new array where every instance of the target parameter which is 
 * alone (no equal values to its right AND left) is replaced by whichever 
 * value to its right or left is higher.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} target - A target number
 * @returns {Array} - Returns a new array
 */
function notAlone (arr, target) {
  let newArr = [];
  let higherValue;
  for (let i = 0; i < arr.length; i++) {
    if (i - 1 < 0 || i + 1 >= arr.length) {
      newArr.push(arr[i]);
    } else if (arr[i] === target && arr[i - 1] !== target && arr[i + 1] !== target) {
      higherValue = arr[i - 1] >= arr[i + 1] ? arr[i - 1] : arr[i + 1];
      newArr.push(higherValue);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}




// value to left and right of target !== target
// set higherValue = right || left number
// add higherValue to array instead of target
// add value to array