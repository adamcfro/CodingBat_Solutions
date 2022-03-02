/**
 * Returns true if parameter is a multiple of 11, or if it is 1 greater than 
 * a multiple of 11.
 * 
 * @param {Number} num - A number parameter
 * @returns {Boolean} - Returns a Boolean
 */
function specialEleven (num) {
  return (num % 11 === 0) || (num % 11 === 1);
}