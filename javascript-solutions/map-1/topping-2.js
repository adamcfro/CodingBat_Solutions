/**
 * Modifies and returns the map as follows:
 * if the key 'ice cream' has a value, set that as the value for the key 
 * 'yogurt' also. If the key 'spinach' has a value, change that value to 'nuts'.
 * 
 * @param {Object} obj - An object parameter
 * @returns {Object} - Returns a modified object
 */
function topping2 (obj) {
  if (obj.hasOwnProperty('ice cream')) {
    obj['yogurt'] = obj['ice cream'];
  } if (obj.hasOwnProperty('spinach')) {
    obj['spinach'] = 'nuts';
  }
  return obj;
}