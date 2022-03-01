/**
 * This function tests whether two monkeys are smiling, and returns true 
 * if both monkeys are either smiling or both are not smiling.
 * 
 * @param {Boolean} aSmile - Checks if monkey "A" is smiling
 * @param {Boolean} bSmile - Checks if monkey "B" is smiling
 * @returns {Boolean} - Returns a Boolean telling us if there is monkey trouble
 */
function monkeyTrouble (aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
  } else {
    return false;
  }
}
