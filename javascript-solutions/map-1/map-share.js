/**
 * Modifies and returns the given map as follows:
 * if the key 'a' has a value, set the key 'b' to have that same value.
 * In all cases remove the key 'c', leaving the rest of the map unchanged.
 * 
 * @param {Object} obj 
 * @returns {Object}
 */
function mapShare (obj) {
  if (obj['a']) {
    obj['b'] = obj['a'];
  } if (obj['c']) {
    delete obj['c'];
  }
  return obj;
}