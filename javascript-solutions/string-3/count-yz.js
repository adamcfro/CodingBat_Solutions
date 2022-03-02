/**
 * Returns a count of words in a string that end with a 'y' or a 'z'.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count
 */
function countYZ (str) {
  let total = 0;
  let wordList = str.split(' ');
  for (let i = 0; i < wordList.length; i++) {
    let strLength = wordList[i].length;
    if ((wordList[i][strLength - 1] === 'y') || (wordList[i][strLength - 1] === 'z')) {
      total += 1;
    }
  }
  return total;
}