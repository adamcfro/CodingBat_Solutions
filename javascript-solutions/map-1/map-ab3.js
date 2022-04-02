/**
 * Modifies and returns the given map as follows:
 * if exactly one of the keys 'a' or 'b' has a value in the map (but not both),
 * set the other to have that same value in the map.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function mapAB3 (obj) {
  if (obj.hasOwnProperty('a') && !obj.hasOwnProperty('b')) {
    obj['b'] = obj['a'];
  } else if (obj.hasOwnProperty('b') && !obj.hasOwnProperty('a')) {
    obj['a'] = obj['b'];
  }
  return obj;
}