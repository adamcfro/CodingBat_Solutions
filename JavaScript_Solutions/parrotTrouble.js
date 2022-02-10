/*
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
*/

/**
 * 
 * @param {Boolean} talking - checks if parrot is talking
 * @param {Number} hour - checks what hour it is
 * @returns {Boolean} - checks if we are in trouble
 */
function parrotTrouble (talking, hour) {
  if ((hour < 7 || hour > 20) && talking) {
    return true;
  } else {
    return false;
  }
}