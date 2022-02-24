/**
 * Returns true if you answer your phone. You answer if you are not sleeping or it is not morning, unless it is your Mom calling.
 * 
 * @param {Boolean} isMorning   If it is morning
 * @param {Boolean} isMom       If Mom is calling
 * @param {Boolean} isAsleep    If you are asleep
 * @returns 
 */
function answerCell (isMorning, isMom, isAsleep) {
  if (isAsleep || (isMorning && !isMom)) {
    return false;
  }
  return true;
}