/**
 * Checks which value is nearest to 10 and returns that number, or returns 0 in the event of a tie.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @returns {Number}          Returns the value closest to 10
 */
function close10 (num1, num2) {
  if ((num1 === num2) || (Math.abs(num1 - 10) === Math.abs(num2 - 10))) {
    return 0;
  } else if (Math.abs(num1 - 10) < Math.abs(num2 - 10)) {
    return num1;
  } else {
    return num2;
  }
}