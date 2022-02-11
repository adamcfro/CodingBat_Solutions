/**
 * Returns the absolute difference between n and 21, or double the absolute difference if n > 21.
 * 
 * @param {Number} n    a number
 * @returns {Number}    the absolute value of (n - 21), or double that value if n > 21
 */
function diff21 (n) {
  if (n > 21) {
    return Math.abs(n - 21) * 2;
  } else {
    return Math.abs(n - 21);
  }
}