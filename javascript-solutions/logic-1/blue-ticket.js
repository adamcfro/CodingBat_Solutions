/**
 * Returns 10 if two parameters equal 10, returns 5 if the sum of num1 and num2 
 * is exactly 10 more than the sum of num2 and num3 or num1 and num3. 
 * Returns 0 otherwise.
 * 
 * @param {Number} num1 - First number parameter
 * @param {Number} num2 - Second number parameter
 * @param {Number} num3 - Third number parameter
 * @returns {Number} - Returns a number
 */
function blueTicket (num1, num2, num3) {
  let result;
  let ab = num1 + num2;
  let bc = num2 + num3;
  let ac = num1 + num3;
  if (ab === 10 || bc === 10 || ac === 10) {
    result = 10;
  } else if ((ab - 10) === bc || (ab - 10) === ac) {
    result = 5;
  } else {
    result = 0;
  }
  return result;
}