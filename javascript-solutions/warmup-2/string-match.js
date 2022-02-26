/**
 * Returns a count of the number of times a substring of two appears in the same positions of two string parameters.
 * 
 * @param {String} str1       First string parameter
 * @param {String} str2       Second string parameter
 * @returns {Number}          A count number
 */
function stringMatch (str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1.substring(i, i + 2) === str2.substring(i, i + 2)) {
      count += 1;
    }
  }
  return count;
}