/**
 * This function tells us we have parrot trouble 
 * if the parrot is talking before 7 or after 20 (military hours).
 * 
 * @param {Boolean} talking - Checks if parrot is talking
 * @param {Number} hour - Checks what hour it is
 * @returns {Boolean} - Returns a Boolean letting us know if we are in trouble
 */
function parrotTrouble (talking, hour) {
  if ((hour < 7 || hour > 20) && talking) {
    return true;
  } else {
    return false;
  }
}