/**
 * Returns true if num2 is greater than num1, and num3 is greater than num2, 
 * unless only3 is true, in which case num2 doesn't need to be greater than 
 * num1.
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @param {Boolean} only3     Only num3 needs to be greater than num1      
 * @returns 
 */
function inOrder (num1, num2, num3, only3) {
  if ((only3 && num3 > num2) || (num2 > num1 && num3 > num2)) {
    return true;
  }
  return false;
}