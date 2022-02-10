/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
*/

/**
 * 
 * @param {Number} n - a given number 
 * @returns {Number} - absolute value of (n - 21)
 */
function diff21 (n) {
  if (n > 21) {
    return Math.abs(n - 21) * 2;
  } else {
    return Math.abs(n - 21);
  }
}