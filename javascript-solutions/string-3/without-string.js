/**
 * Returns a new string where any instance of the parameter remove that occurs 
 * in the original string have been removed.
 * 
 * @param {String} baseStr - A string parameter
 * @param {String} remove - Substring to remove
 * @returns {String} - Returns a new string
 */
function withoutString (baseStr, remove) {
  let newStr = '';
  for (let i = 0; i < baseStr.length; i++) {
    if (baseStr.substring(i, i + remove.length) === remove) {
      i += remove.length - 1;
    } else {
      newStr += baseStr[i];
    }
  }
  return newStr;
}




// go through string
// set length of remove parameter
// if str.substring() === remove, skip characters