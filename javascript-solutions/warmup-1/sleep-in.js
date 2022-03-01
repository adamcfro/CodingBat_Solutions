/**
 * This function returns a Boolean letting us know we can sleep in 
 * if it is a weekend or if we are on vacation.
 * 
 * @param {Boolean} weekday - Checks if it is a weekday
 * @param {Boolean} vacation - Checks if on we are on vacation 
 * @returns {Boolean} - Returns true if we sleep in, false otherwise
 */
function sleepIn (weekday, vacation) {
  if (weekday && !vacation) {
    return false;
  } else {
    return true;
  }
}