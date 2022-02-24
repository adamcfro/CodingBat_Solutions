/**
 * Compares the average of the numbers in the first half of the array against the average of the numbers in the second half of the array, and returns whichever is higher.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns the higher average number
 */
function scoresAverage (arr) {
  let middle = Math.floor(arr.length / 2);
  let firstHalf = averageScore(arr, 0, middle);
  let secondHalf = averageScore(arr, middle, arr.length);
  return firstHalf >= secondHalf ? firstHalf : secondHalf;
}

/**
 * Returns an averaged sum from an array.
 * 
 * @param {Array} scores      An array of numbers
 * @param {Number} start      The starting index
 * @param {Number} end        The ending index
 * @returns {Number}          Returns an averaged sum
 */
function averageScore (scores, start, end) {
  let total = 0;
  for (let i = start; i < end; i++) {
    total += scores[i];
  }
  return total / (scores.length / 2);
}