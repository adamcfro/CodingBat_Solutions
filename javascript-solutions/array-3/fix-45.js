/**
 * Returns an array that contains exactly the same numbers as the given array, 
 * but rearranged so that every 4 is immediately followed by a 5. Does not move 
 * the 4's, but every other number may move. The array will contain the same 
 * number of 4's and 5's, and every 4 has a number after it that is not a 4.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function fix45 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 5) {
          if (j > 0 && arr[j - 1] !== 4) {
            let holdNumber = arr[i + 1];
            arr[i + 1] = 5;
            arr[j] = holdNumber;
          } 
          else if (j === 0) {
            let holdNumber = arr[i + 1];
            arr[i + 1] = 5;
            arr[j] = holdNumber;
          }        
        }
      }
    }
  }
  return arr;
}