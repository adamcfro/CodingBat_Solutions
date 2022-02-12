/**
 * Helper function that checks if a number is within the range 10-20.
 * 
 * @param {Number} num      A number parameter
 * @returns {Boolean}       Returns a Boolean
 */
function between (num) {
  if (num >= 10 && num <= 20) {
    return true;
  }
}

/**
 * Returns the highest number given between 10-20, or 0 if neither number is within range.
 * 
 * @param {Number} num1     First number parameter
 * @param {Number} num2     Second number parameter
 * @returns {Number}        Returns the highest number in range or 0 if none in range
 */
function max1020 (num1, num2) {
  if (between(num1) && between(num2)) {
    return Math.max(num1, num2);
  } else if (between(num1)) {
    return num1;
  } else if (between(num2)) {
    return num2;
  } else {
    return 0;
  }
}