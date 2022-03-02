/**
 * Returns the sum of three parameters, unless one of them is 13, in which case 
 * that parameter and any parameter to its right do not count towards the sum.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Number} - Returns a sum
 */
function luckySum (num1, num2, num3) {
  let total = 0;
  if (num1 === 13) {
    total += 0;
  } else if (num2 === 13) {
    total += num1;
  } else if (num3 === 13) {
    total += (num1 + num2);
  } else {
    total += (num1 + num2 + num3);
  }
  return total;
}