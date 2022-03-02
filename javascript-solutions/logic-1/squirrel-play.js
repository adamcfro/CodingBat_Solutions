/**
 * Returns true if temperature is between 60 and 90, or 60 and 100 if isSummer 
 * is true. False otherwise.
 * 
 * @param {Number} temperature - A number parameter
 * @param {Boolean} isSummer - If it is summer
 * @returns {Boolean} - Returns a Boolean
 */
function squirrelPlay (temperature, isSummer) {
  let limit = isSummer ? 100 : 90;
  if (temperature >= 60 && temperature <= limit) {
    return true;
  }
  return false;
}