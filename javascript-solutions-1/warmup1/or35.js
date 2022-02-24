/**
 * Returns true if the parameter is a multiple of 3 or 5.
 * 
 * @param {Number} num    A number parameter
 * @returns {Boolean}     Returns true if the parameter is a multiple of 3 or 5
 */
function or35 (num) {
  if (num % 3 === 0 || num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}