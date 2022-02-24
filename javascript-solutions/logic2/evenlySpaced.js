/**
 * Returns true if all three parameters are evenly spaced, so the difference between the small and medium parameters is the same as the difference between medium and large.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function evenlySpaced (num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return true;
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return false;
  } else {
    return ((Math.abs(num1 - num2) === Math.abs(num2 - num3)) || (Math.abs(num1 - num2) === Math.abs(num1 - num3)) || (Math.abs(num2 - num3) === Math.abs(num3 - num1)));
  }
}