/**
 * Returns true if the array contains a 2 next to another 2 or a 4 next to a 4, but not both.
 * 
 * @param {Array} arr           An array of numbers
 * @returns {Boolean}           Returns a Boolean
 */
function either24 (arr) {
  let twoTogether = false;
  let fourTogether = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && arr[i + 1] === 2) {
      twoTogether = true;
    } else if (arr[i] === 4 && arr[i + 1] === 4) {
      fourTogether = true;
    }
  }
  return (twoTogether && !fourTogether) || (!twoTogether && fourTogether);
}