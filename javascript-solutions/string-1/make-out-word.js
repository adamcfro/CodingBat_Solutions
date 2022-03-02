/**
 * Returns a string with the innerStr parameter placed between index[1] and 
 * index[2 of the outerStr parameter.
 * 
 * @param {String} outerStr - Wraps around innerStr parameter
 * @param {String} innerStr - Goes inside outerStr parameter
 * @returns {String} - Returns a string
 */
function makeOutWord (outerStr, innerStr) {
  return outerStr.substring(0, 2) + innerStr + outerStr.substring(2, outerStr.length);
}