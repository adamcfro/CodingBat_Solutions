/**
 * Returns the sum of two dice. However, if noDoubles is true and the dice 
 * show the same number, increment one die to the next value, wrapping around 
 * to 1 if its value was 6.
 * 
 * @param {Number} num1 - A number between 1-6
 * @param {Number} num2 - A number between 1-6
 * @param {Boolean} noDoubles - A Boolean that checks for repeat values
 * @returns {Number} - Returns a sum
 */
function withoutDoubles (num1, num2, noDoubles) {
  if (noDoubles && num1 === 6 && num2 === 6) {
    return 7;
  } else if (noDoubles && num1 === num2) {
    return (num1 + num2 + 1);
  } else {
    return num1 + num2;
  }
}