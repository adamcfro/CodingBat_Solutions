/**
 * Returns a new string with three copies of the first three characters of the string parameter.
 * 
 * @param {String} str    A string parameter
 * @returns {String}      Returns a new string
 */
function front3 (str) {
  if (str.length < 3) {
    return str.repeat(3);
  } else {
    return str.substring(0, 3).repeat(3);
  }
}