/**
 * Returns true if there are enough bricks to exactly make up the goal number. Small bricks are worth 1, big bricks are worth 5.
 * 
 * @param {Number} smallBricks  Number of small bricks
 * @param {Number} bigBricks    Number of large bricks
 * @param {Number} goal         Goal number
 * @returns {Boolean}           Returns a Boolean
 */
function makeBricks (smallBricks, bigBricks, goal) {
  return ((goal - (bigBricks * 5) <= smallBricks) && ((goal % 5) <= smallBricks));
}