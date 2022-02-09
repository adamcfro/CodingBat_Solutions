/*
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
*/

/**
 * 
 * @param {Boolean} aSmile - if monkey "A" is smiling
 * @param {Boolean} bSmile - if monkey "B" is smiling
 * @returns {Boolean} - whether we are in trouble
 */
function monkeyTrouble (aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
  } else {
    return false;
  }
}
