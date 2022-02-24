/**
 * Returns true if the substring 'xyz' appears in the middle of the string parameter. Can be off by 1 index.
 * 
 * @param {String} str        A string parameter
 * @returns {Boolean}         Returns a Boolean
 */
function xyzMiddle (str) {
  let middle = Math.round(str.length / 2);
  if ((str.substring(middle - 1, middle + 2) === 'xyz') || (str.substring(middle - 2, middle + 1) === 'xyz')) {
    return true;
  }
  return false;
}