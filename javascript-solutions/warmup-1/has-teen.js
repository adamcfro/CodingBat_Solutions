/**
 * Helper function that hecks if a number is between 13 and 19 and 
 * returns true if so.
 * 
 * @param {Number} num - A number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function between (num) {
  if (num >= 13 && num <= 19) {
    return true;
  } else {
    return false;
  }
}


/**
 * Checks if any of the parameters are in the range of 13-19.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Boolean} - Returns true if one of parameters is in the range 13-19
 */
function hasTeen (num1, num2, num3) {
  if (between(num1) || between(num2) || between(num3)){
    return true;
  } else {
    return false;
  }
}