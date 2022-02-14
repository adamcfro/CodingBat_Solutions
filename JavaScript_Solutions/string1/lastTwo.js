/**
 * Returns a string with the last two characters swapping places.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a modified string
 */
function lastTwo (str) {
  let splitName = str.substring(str.length - 2).split('');
  let reverseName = splitName.reverse().join('');
  return str.substring(0, str.length - 2) + reverseName;
}