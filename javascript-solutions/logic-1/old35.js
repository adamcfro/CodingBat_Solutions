/**
 * Returns true if parameter is a multiple of 3 or 5, but not both.
 * 
 * @param {Number} num        A number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function old35 (num) {
  let mult3 = (num % 3 === 0) ? true : false;
  let mult5 = (num % 5 === 0) ? true : false;
  return ((mult3 && !mult5) || (!mult3 && mult5));
}