/**
 * Modifies and returns the given map as follows:
 * if the keys 'a' and 'b' are both in the map and have equal values,
 * remove them both.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function mapAB2 (obj) {
  if ('a' in obj && 'b' in obj && obj['a'] === obj['b']) {
    delete obj['a'];
    delete obj['b'];
  }
  return obj;
}