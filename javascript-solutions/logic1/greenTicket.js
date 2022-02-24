/**
 * Returns 20 if all parameters are equal, 10 if two parameters are equal, 0 otherwise.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Number}          Returns a number
 */
function greenTicket (num1, num2, num3) {
  let result;
  if (num1 === num2 && num1 === num3) {
    result = 20;
  } else if ((num1 === num2 && num1 !== num3) || (num1 === num3 && num1 !== num2) || (num2 === num3 && num2 != num1)) {
    result = 10;
  } else {
    result = 0;
  }
  return result;
}