/**
 * Modifies and returns the given map as follows:
 * if the keys 'a' and 'b' have values that have different lengths,
 * then set 'c' to have the longer value. If the values exist and have
 * the same length, change them both to have the empty string in the map.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function mapAB4 (obj) {
  let aLength = obj['a'].length;
  let bLength = obj['b'].length;
  if (aLength === bLength) {
    obj['a'] = '';
    obj['b'] = '';
  } else if (aLength > bLength) {
    obj['c'] = obj['a'];
  } else if (bLength > aLength) {
    obj['c'] = obj['b'];
  }
  return obj;
}