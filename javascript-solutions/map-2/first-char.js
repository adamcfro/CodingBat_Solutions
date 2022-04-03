/**
 * Returns an object with a key for every different first character seen,
 * with the value of all the strings starting with that character appended
 * together in the order they appear in the array.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function firstChar (arr) {
  let obj = {};
  arr.forEach(function(element) {
    if (obj.hasOwnProperty(element[0])) {
      obj[element[0]] += element;
    } else {
      obj[element[0]] = element;
    }
  })
  return obj;
}