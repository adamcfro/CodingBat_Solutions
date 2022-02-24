/**
 * Returns the number of times 'e' appears in a string.
 * 
 * @param {String} str        A string parameter
 * @returns {Number}          Returns the number of times 'e' appears in a string
 */
function stringE (str) {
  let numberOfE = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
      numberOfE += 1;
    } else {
      continue;
    }
  }
  return numberOfE;
}