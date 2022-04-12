/**
 * Recursively returns the value of 'base' to the power 'n'.
 * 
 * @param {Number} base 
 * @param {Number} power 
 * @returns 
 */
function powerN (base, power) {
  if (power === 0) {
    return 1;
  }
  return base * powerN(base, power - 1);
}