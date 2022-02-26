/**
 * Returns true if number parameter is greater or equal to 1 and less than or equal to 10, unless outside parameter is true, in which case returns true if number parameter is less than or equal to 1 or greater than or equal to 10.
 * 
 * @param {Number} num            A number parameter
 * @param {Boolean} outsideMode   A Boolean parameter
 * @returns 
 */
function in1To10 (num, outsideMode) {
  if (outsideMode) {
    return (num <= 1 || num >= 10);
  } else {
    return (num >= 1 && num <= 10);
  }
}