/**
 * Returns true if two of the parameters can be added to get the third parameter.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns 
 */
function twoAsOne (num1, num2, num3) {
  if ((num1 + num2 === num3) || (num1 + num3 === num2) || (num2 + num3 === num1)) {
    return true;
  }
  return false;
}