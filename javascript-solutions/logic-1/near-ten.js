/**
 * Returns true if parameter is within 2 of a multiple of 10.
 * 
 * @param {Number} num - A number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function nearTen (num) {
  return (num % 10 === 0 || num % 10 === 1 || num % 10 === 2);
}