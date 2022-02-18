/**
 * Returns true if the substrings 'cat' and 'dog' appear the same number of times in a string.
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function catDog (str) {
  let catCount = 0;
  let dogCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) === 'cat') {
      catCount += 1;
    } else if (str.substring(i, i + 3) === 'dog') {
      dogCount += 1;
    }
  }
  return catCount === dogCount;
}