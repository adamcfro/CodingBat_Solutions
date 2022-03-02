/**
 * Returns a new string made up by switching back and forth between strings and 
 * concatenating the character onto the new string.
 * 
 * @param {String} str1 - First string parameter
 * @param {String} str2 - Second string parameter
 * @returns {String} - Returns a new string
 */
function mixString (str1, str2) {
  let alternatingStr = '';
  let longerStr = (str1.length >= str2.length) ? str1.length : str2.length;
  for (let i = 0; i < longerStr; i++) {
    if (str1.length > i) {
      alternatingStr += str1[i];
    }
    if (str2.length > i) {
      alternatingStr += str2[i];
    }
  }
  return alternatingStr;
}