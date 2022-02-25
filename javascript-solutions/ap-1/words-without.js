/**
 * Returns a new array with all the instances of target left off.
 * 
 * @param {Array} arr         An array of strings
 * @param {Number} target     A target string
 * @returns {Array}           Returns a new array
 */
function wordsWithout (arr, target) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}