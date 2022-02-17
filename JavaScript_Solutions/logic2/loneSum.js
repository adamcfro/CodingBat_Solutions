/**
 * Returns the sum of three numbers, unless any values are equal to each other, in which case they do not count towards the sum.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Number}          Returns a sum
 */
function loneSum (num1, num2, num3) {
  let total = 0;
  switch (true) {
    case (num1 === num2 && num1 === num3):
      total = 0;
      break;
    case (num1 === num2):
      total = num3;
      break;
    case (num1 === num3):
      total = num2;
      break;
    case (num2 === num3):
      total = num1;
      break;
    default:
      total = (num1 + num2 + num3);
      break;
  }
  return total;
}