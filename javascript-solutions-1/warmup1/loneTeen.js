/**
 * Helper function that checks if a number is within the range of 13-19.
 * 
 * @param {Number} num      A number parameter
 * @returns {Boolean}       Returns a Boolean
 */
function between (num) {
  if (num >= 13 && num <= 19) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks if one, but not both parameters, is within the range of 13-19 and returns true if so.
 * 
 * @param {Number} num1     First number parameter
 * @param {Number} num2     Second number parameter
 * @returns {Boolean}       Returns a Boolean
 */
function loneTeen (num1, num2) {
  if ((between(num1) && !between(num2)) || (between(num2) && !between(num1))) {
    return true;
  } else {
    return false;
  }
}