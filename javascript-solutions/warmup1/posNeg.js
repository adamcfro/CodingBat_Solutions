/**
 * This function returns true if one of the parameters is positive and the other negative, unless the paramter 'negative' is true, in which case both parameters must be negative.
 * 
 * @param {Number} a          A number
 * @param {Number} b          A number
 * @param {Boolean} negative  Tells whether both other parameters should be negative
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