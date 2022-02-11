/**
 * This function checks if a number is within 10 of 100 or 200.
 * 
 * @param {Number} num    A number
 * @returns {Boolean}     Returns true if num is within 10 of 100 or 200
 */
function nearHundred (num) {
  if ((Math.abs(100 - num) <= 10) || (Math.abs(200 - num) <= 10)) {
    return true;
  } else {
    return false;
  }
}