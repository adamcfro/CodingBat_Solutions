/**
 * Given an array, if there is a 2 followed immediately by a 3, sets the element to 0. Returns the changed array.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Array}           Returns a modified array
 */
function fix23 (arr) {
  let newArr = [];
  let sentinel = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 && sentinel) {
      newArr.push(0);
      sentinel = false;
    } else if (arr[i] === 2) {
      newArr.push(arr[i]);
      sentinel = true;
    } else {
      sentinel = false;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}