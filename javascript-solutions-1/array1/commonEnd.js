/**
 * Returns true if both arrays share the same first element or the same last element.
 * 
 * @param {Array} arr1        First array parameter 
 * @param {Array} arr2        Second array parameter
 * @returns {Boolean}         Returns a Boolean
 */
function commonEnd (arr1, arr2) {
  if (arr1[0] === arr2[0] || arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
    return true;
  }
  return false;
}