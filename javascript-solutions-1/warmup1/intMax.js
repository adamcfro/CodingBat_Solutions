/**
 * Returns the highest value given.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Number}          Returns highest number
 */
function intMax (num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}