/**
 * Returns an array where 1 is added to each integer from the parameter
 * and the result is then multiplied by 10. 
 * 
 * @param {Array} arr - An array of numbers.
 * @returns {Array} - Returns a new array of numbers
 */
function math1 (arr) {
  let modArray = [];
  for (let i = 0; i < arr.length; i++) {
    modArray.push((arr[i] + 1) * 10);
  }
  return modArray;
}