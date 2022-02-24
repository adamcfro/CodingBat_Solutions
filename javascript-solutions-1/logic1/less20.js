/**
 * Returns true if parameter is 1 or 2 less than a multiple of 20. Returns false otherwise.
 * 
 * @param {Number} num        A number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function less20 (num) {
  return ((num % 20 === 18) || (num % 20 === 19));
}