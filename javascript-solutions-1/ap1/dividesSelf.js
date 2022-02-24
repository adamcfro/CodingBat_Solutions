/**
 * Returns true if the number parameter divides evenly by each digit in the parameter, except that we'll say 0 does not divide into anything evenly, so no number with a 0 digit divides itself.
 * 
 * @param {Number} num        A number parameter
 * @returns {Boolean}         Returns a Boolean
 */
function dividesSelf (num) {
  let splitNums = [];
  let stringNums = num.toString().split('');
  stringNums.forEach(function(n) {
    splitNums.push(parseInt(n));
  });
  for (let i = 0; i < splitNums.length; i++) {
    if (num % splitNums[i] !== 0) {
      return false;
    }
  }
  return true;
}