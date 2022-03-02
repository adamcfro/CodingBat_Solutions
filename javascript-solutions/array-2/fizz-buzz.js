/**
 * Returns a string array where multiples of both 3 and 5 are replaced by 
 * 'FizzBuzz', multiples of 3 are replaced by 'Fizz', multiples of 5 
 * are replaced by 'Buzz', and all other numbers are converted to 
 * string form. Begins at index [start] up to but not including index [end].
 * 
 * @param {Number} start - A starting index
 * @param {Number} end - An ending index
 * @returns {Array} - Returns an array of strings
 */
function fizzBuzz (start, end) {
  let arr = [];
  for (let i = start; i < end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}