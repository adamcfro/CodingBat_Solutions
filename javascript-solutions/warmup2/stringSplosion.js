/**
 * Returns a new string that is created by adding characters up to the indexed position each time through the for loop.
 * 
 * @param {String} str      A string parameter
 * @returns {String}        Returns a new string
 */
function stringSplosion (str) {
  let newString = '';
  for (let i = 0; i <= str.length; i++) {
    newString += str.substring(0, i);
  }
  return newString;
}