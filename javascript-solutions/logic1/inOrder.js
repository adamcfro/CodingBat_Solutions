/**
 * Returns true if num2 is greater than num1, and num3 is greater than num2, unless bOk is true, in which case num2 doesn't need to be greater than num1.
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Number} num3 
 * @param {Boolean} bOk 
 * @returns 
 */
function inOrder (num1, num2, num3, bOk) {
  if ((bOk && num3 > num2) || (num2 > num1 && num3 > num2)) {
    return true;
  }
  return false;
}