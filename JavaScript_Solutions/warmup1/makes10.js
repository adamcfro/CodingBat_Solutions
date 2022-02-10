/*
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

/**
 * 
 * @param {Number} a - any number
 * @param {Number} b - any number
 * @returns {Boolean} - true if either parameter is 10 or their sum is 10
 */
function makes10 (a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
}