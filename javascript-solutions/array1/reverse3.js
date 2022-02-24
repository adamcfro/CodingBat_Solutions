/**
 * Returns a reversed array.
 * 
 * @param {Array} arr         An array parameter
 * @returns {Array}           Returns a reversed array
 */
function reverse3 (arr) {
  let reverseArr = [];
  while (arr.length > 0) {
    reverseArr.push(arr.pop());
  }
  return reverseArr;
}