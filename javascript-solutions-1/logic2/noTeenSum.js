/**
 * Returns the sum of three parameters while checking that they aren't teen numbers (except for 15 and 16).
 * 
 * @param {Number} num1       First number parameter
 * @param {Number} num2       Second number parameter
 * @param {Number} num3       Third number parameter
 * @returns 
 */
function noTeenSum (num1, num2, num3) {
  return fixTeen(num1) + fixTeen(num2) + fixTeen(num3);
}

/**
 * Helper function that returns 0 if number parameter is in the teens, unless it equals 15, 16, or any non-teen number, in which case it returns the original parameter number.
 * 
 * @param {Number} num        A number parameter
 * @returns {Number}          Returns a number
 */
function fixTeen(num) {
  let teenNums = [13, 14, 17, 18, 19];
  if (teenNums.includes(num)) {
    return 0;
  }
  return num;
}