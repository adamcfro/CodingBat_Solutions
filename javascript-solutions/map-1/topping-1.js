/**
 * Modifies and returns the map as follows:
 * if the key 'ice cream' is present, set its value to 'cherry'.
 * In all cases, set the key 'bread' to have the value 'butter'.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function topping1 (obj) {
  obj['bread'] = 'butter';
  if (obj['ice cream']) {
    obj['ice cream'] = 'cherry';
  }
  return obj;
}