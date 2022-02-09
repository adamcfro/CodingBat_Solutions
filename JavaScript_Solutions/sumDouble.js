/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.
*/

/**
 * 
 * @param {Number} num1 - a number value
 * @param {Number} num2 - a number value
 * @returns {Number} - sum of num1 and num2
 */
function sumDouble (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 2;
  } else {
    return num1 + num2;
  }
}