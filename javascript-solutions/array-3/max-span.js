/**
 * Returns the largest span in an array. A span is the number of elements 
 * between the first and last appearance of an element, inclusive. A single
 * value has a span of 1.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns a length (span) number
 */
function maxSpan (arr) {
  let longestSpan = 0;
  let counter = 0;
  let spans = [];
  for (let i = 0, j = 0; i < arr.length && j < arr.length; i++) {
    let leftSpan = arr[j];
    if (arr[i] !== leftSpan) {
      counter += 1;
    } else if (i + 1 <= arr.length) {
      longestSpan += 1 + counter;
      counter = 0;
    }
    if (i + 1 >= arr.length) {
      spans.push(longestSpan);
      longestSpan = 0;
      counter = 1;
      j += 1;
      i = j;
    }
  }
  return Math.max(...spans);
}