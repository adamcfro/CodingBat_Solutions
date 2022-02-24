/**
 * Returns the middle two characters of the string paramter.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a portion of a string
 */
function middleTwo (str) {
  let middle = Math.floor(str.length / 2) - 1;
  return str.substring(middle, middle + 2);
}