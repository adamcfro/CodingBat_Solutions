/*
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.
*/

/**
 * 
 * @param {Number} a - any given number
 * @param {Number} b - any given number
 * @param {Boolean} negative - tells whether both other parameters should be negative
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