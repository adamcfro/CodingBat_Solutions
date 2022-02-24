/**
 * Returns a substring of 3 characters starting from the middle index of the parameter string.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a substring
 */
function middleThree (str) {
  middle = Math.floor(str.length / 2) - 1;
  return str.substring(middle, middle + 3);
}