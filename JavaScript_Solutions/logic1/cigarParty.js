/**
 * Returns true if the number parameter is greater than forty and less than 60, unless the Boolean paramter is true, in which case there is no upper bound on the number parameter.
 * 
 * @param {Number} numCigars    Number of cigars
 * @param {Boolean} isWeekend   If it is the weekend
 * @returns 
 */
function cigarParty (numCigars, isWeekend) {
  if (isWeekend && numCigars >= 40) {
    return true;
  } else {
    return (numCigars >= 40 && numCigars <= 60);
  }
}