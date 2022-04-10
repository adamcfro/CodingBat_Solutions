/**
 * Recursively returns the total number of blocks in a triangle with the
 * given number of rows. The topmost row of the triangle will have one block,
 * the next row down has two blocks, etc.
 * 
 * @param {Number} num - The number of rows in a triangle
 * @returns {Number} - Returns the number of blocks in a triangle
 */
function triangle (num) {
  if (num === 0) {
    return 0;
  }
  return num + triangle(num - 1);
}