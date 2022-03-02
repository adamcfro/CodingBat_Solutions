/**
 * Returns a string based on the number parameter. Returns 'FizzBuzz' 
 * if num is divisible by 3 and 5, returns 'Fizz' if num is divisible by 3, 
 * returns 'Buzz', if num is divisible by 5, otherwise returns 
 * the original number.
 * 
 * @param {Number} num - A number parameter
 * @returns {String} - Returns a string
 */
function fizzString2 (num) {
  let returnString;
  if (num % 3 === 0 && num % 5 === 0) {
    returnString = 'FizzBuzz';
  } else if (num % 3 === 0) {
    returnString = 'Fizz';
  } else if (num % 5 === 0) {
    returnString = 'Buzz';
  } else {
    returnString = num;
  }
  return `${returnString}!`;
}