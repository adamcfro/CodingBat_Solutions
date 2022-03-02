/** 
 * Returns the sum of two numbers, unless either paramter is in the range
 * 13-19, in which case returns 19.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @returns {Number} - Returns a sum
 */
function teenSum (num1, num2) {
  let teenNums = [];
  for (let i = 13; i < 20; i++) {
    teenNums.push(i);
  }
  if (teenNums.includes(num1) || teenNums.includes(num2)) {
    return 19;
  } else {
    return num1 + num2;
  }
}