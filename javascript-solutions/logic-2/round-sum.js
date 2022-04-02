/**
 * Returns the sum of three parameters that are rounded up to the nearest 10 if 
 * the rightmost digit of the parameter is 5 or greater, and rounded down-otherwise.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Number} - Returns a sum
 */
function roundSum (num1, num2, num3) {
  return round10(num1) + round10(num2) + round10(num3);
}


/**
 * Returns a rounded number. Rounds up if rightmost digit is greater than 5. 
 * Will round down otherwise.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a rounded number
 */
function round10 (num) {
  let myNum = num / 10;
  let roundNum = (num % 10 >= 5) ? (Math.ceil(myNum) * 10) : (Math.floor(myNum) * 10);
  return roundNum;
}