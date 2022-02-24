/**
 * Returns the amount of small bricks used to reach goal, or returns -1 if it can't be done.
 * 
 * @param {Number} small      Small bricks number
 * @param {Number} big        Large bricks number
 * @param {Number} goal       Goal number
 * @returns {Number}          Returns the amount of small bricks necessary
 */
function makeChocolate (small, big, goal) {
  if ((goal > small + (big * 5)) || (small < (goal % 5))) {
    return -1;
  } else if (big * 5 > goal) {
    return goal % 5;
  } else {
    return goal - (big * 5);
  }
}