/**
 * This function returns true if one of the parameters is positive and 
 * the other negative, unless the paramter 'negative' is true, in which case 
 * both parameters must be negative.
 * 
 * @param {Number} a - First number parameter
 * @param {Number} b - Second number parameter
 * @param {Boolean} negative - Whether both number parameters should be negative
 * @returns {Boolean}
 */
function posNeg (a, b, negative) {
  if (negative && (a < 0) && (b < 0)) {
    return true;
  } else if (!negative && ((a > 0 && b < 0) || (a < 0 && b > 0))) {
    return true;
  } else {
    return false;
  }
}