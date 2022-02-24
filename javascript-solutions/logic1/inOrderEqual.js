/**
 * Returns true if number parameters are in strict increasing order, unless equalOk is true, in which case equality is allowed
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameteer
 * @param {Boolean} equalOk   Allows for equality
 * @returns {Boolean}         Returns a Boolean
 */
function inOrderEqual (num1, num2, num3, equalOk) {
  if (equalOk && (num2 >= num1) && (num3 >= num2)) {
    return true;
  } else if ((num2 > num1) && (num3 > num2)) {
    return true;
  }
  return false;
}