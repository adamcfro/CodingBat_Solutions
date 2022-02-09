/*
The parameter weekday is true if it is a weekday, and the
parameter vacation is true if we are on vacation. We sleep in 
if it is not a weekday or we're on vacation. Return true if we 
sleep in.
*/


/**
 * @param {Boolean} weekday - checks if it is a weekday
 * @param {Boolean} vacation - checks if on vacation 
 * @returns {Boolean}
 */
function sleepIn (weekday, vacation) {
  if (weekday && !vacation) {
    return false;
  } else {
    return true;
  }
}