/**
 * Returns the highest value parameter, unless both are greater than 21, in which case returns 0.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @returns {Number}          Returns the higher value
 */
function blackJack (num1, num2) {
  if (num1 > 21 && num2 > 21) {
    return 0;
  } else if (num1 > 21) {
    return num2;
  } else if (num2 > 21) {
    return num1;
  } else if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}