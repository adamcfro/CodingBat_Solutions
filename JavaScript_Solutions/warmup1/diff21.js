/**
 * Returns the absolute difference between n and 21, or double the absolute difference if n > 21.
 * 
 * @param {Number} num    A number
 * @returns {Number}      Returns the absolute difference between n and 21, or double the absolute difference if n > 21.
 */
function diff21 (num) {
  if (num > 21) {
    return Math.abs(num - 21) * 2;
  } else {
    return Math.abs(num - 21);
  }
}