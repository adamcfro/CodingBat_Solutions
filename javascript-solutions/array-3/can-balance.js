/**
 * Returns true if there is a place to split the array so that the sum 
 * of the numbers on one side is equal to the sum of the numbers on the 
 * other side.
 * 
 * @param {Array} arr 
 * @returns {Boolean}
 */
function canBalance (arr) {
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < arr.length; i++) {
    sumRight += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sumLeft += arr[i];
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return true;
    }
  }
  return false;
}