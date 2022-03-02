/**
 * Returns true if for every 'x' that appears in the parameter string, there 
 * appears a 'y' later in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function xyBalance (str) {
  let sentinel = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      sentinel = false;
    } else if (str[i] === 'y') {
      sentinel = true;
    }
  }
  return sentinel;
}