/**
 * Return a new string where the first and last chars have been exchanged.
 * 
 * @param {String} str   a string
 * @returns {String}     a reconstructed string
 */
function frontBack (str) {
  return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
}