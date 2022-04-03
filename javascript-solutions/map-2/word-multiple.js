/**
 * Returns an object where each different string is a key and its value
 * is true if that string appears two or more times in the array.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Object} - Returns an object
 */
function wordMultiple (arr) {
  let wordCount = {};
  let containsMultiples = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in wordCount) {
      containsMultiples[arr[i]] = true;
    } else {
      wordCount[arr[i]] = 1;
      containsMultiples[arr[i]] = false;
    }
  }
  return containsMultiples;
}