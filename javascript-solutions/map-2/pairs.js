/**
 * Returns an object as follows:
 * for each string, add its first character as a key with its
 * last character as the value.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function pairs (arr) {
  let obj = {};
  arr.forEach (function(element) {
    obj[element[0]] = element[element.length - 1]; 
  })
  return obj;
}