/**
 * Returns a string by switching between adding two characters from the string, then skipping the next two characters of the string, and repeating.
 * 
 * @param {String} str        A string parameter
 * @returns {String}          Returns a new string
 */
function altPairs (str) {
  let newString = '';
  let indexIncrement = 0
  for (let i = 0; i < str.length; i++) {
    if (indexIncrement === 2) {
      indexIncrement +=1;
      continue;
    } else if (indexIncrement === 3) {
      indexIncrement = 0;
      continue;
    } else {
      newString += str[i];
      indexIncrement +=1;
    }
  }
  return newString;
}