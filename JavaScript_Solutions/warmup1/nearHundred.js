/*
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
*/

/**
 * 
 * @param {Number} n - any given number
 * @returns {Boolean} - true if n within 10 of 100 or 200
 */
function nearHundred (n) {
  if ((Math.abs(100 - n) <= 10) || (Math.abs(200 -n) <= 10)) {
    return true;
  } else {
    return false;
  }
}