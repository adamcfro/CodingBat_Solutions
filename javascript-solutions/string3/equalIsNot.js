/**
 * Returns true if the substring 'is' appears the same number of times the substring 'not' appears in the parameter string.
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function equalIsNot (str) {
  let isCount = 0;
  let notCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 2) === 'is') {
      isCount += 1;
    } else if (str.substring(i, i + 3) === 'not') {
      notCount += 1;
    }
  }
  return isCount === notCount;
}