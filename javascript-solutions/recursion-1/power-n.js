/**
 * Recursively returns the value of 'base' to the power 'n'.
 * 
 * @param {Number} base - A base number
 * @param {Number} power - The power to which the base number is raised
 * @returns {Number} - Returns a squared value
 */
function powerN (base, power) {
  if (power === 0) {
    return 1;
  }
  return base * powerN(base, power - 1);
}