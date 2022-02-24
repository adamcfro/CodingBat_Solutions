/**
 * Returns 10 if all parameters are 2, returns 5 if all parameters are the same (!= 2), returns 1 if first parameter is not equal to either other parameter, returns 0 otherwise.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Number}          Returns a number
 */
function redTicket (num1, num2, num3) {
  let result;
  if (num1 === 2 && num2 === 2 && num3 === 2) {
    result = 10;
  } else if (num1 === num2 && num1 === num3) {
    result = 5;
  } else if (num1 !== num2 && num1 !== num3) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}