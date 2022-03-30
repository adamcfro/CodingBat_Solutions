/**
 * Modifies and returns the given map as follows: if the key 'a' has a value,
 * set the key 'b' to have that value and set the key 'a' to have the value ''.
 * 
 * @param {Object} obj 
 * @returns {Object}
 */
 function mapBully (obj) {
  if (obj['a'] !== null) {
    obj['b'] = obj['a'];
    obj['a'] = '';
  }
  return obj;
}