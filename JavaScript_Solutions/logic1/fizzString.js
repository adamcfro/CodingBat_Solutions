/**
 * Returns the string 'FizzBuzz' if the parameter starts with 'f' and ends with 'b'. Returns 'Fizz' if parameter starts with 'f', 'Buzz' if parameter ends with 'b', otherwise returns the original parameter.
 * 
 * @param {String} str 
 * @returns {String}
 */
function fizzString (str) {
  let returnString;
  if (str[0] === 'f' && str[str.length - 1] === 'b') {
    returnString = 'FizzBuzz';
  } else if (str[0] === 'f') {
    returnString = 'Fizz';
  } else if (str[str.length - 1] === 'b') {
    returnString = 'Buzz';
  } else {
    returnString = str;
  }
  return returnString;
}