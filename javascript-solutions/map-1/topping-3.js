/**
 * Modifies and returns the map as follows:
 * if the key 'potato' has a value, set that as the value for the key 'fries'.
 * If the key 'salad' has a value, set that as the value for the key 'spinach'.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function topping3 (obj) {
  if (obj.hasOwnProperty('potato')) {
    obj['fries'] = obj['potato'];
  } if (obj.hasOwnProperty('salad')) {
    obj['spinach'] = obj['salad'];
  }
  return obj;
}