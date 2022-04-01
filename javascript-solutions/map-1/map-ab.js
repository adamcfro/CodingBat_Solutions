/**
 * Modifes and returns the given map as follows:
 * If both 'a' and 'b' keys are present, append their two string values
 * together and store the result under the key 'ab'.
 * 
 * @param {Object} obj - The object parameter
 * @returns {Object} - Returns a modified object
 */
function mapAB (obj) {
  if (obj['a'] && obj['b']) {
    obj['ab'] = obj['a'] + obj['b'];
  }
  return obj;
}