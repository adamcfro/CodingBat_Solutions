/**
 * We have bunnies standing in a line, numbered 1, 2, ...
 * The odd bunnies (1, 3, ...) have the normal two ears.
 * The even bunnies (2, 4, ...) we'll say have three ears
 * because they each have a raised foot.
 * Recursively returns the number of 'ears' in the bunny line.
 * 
 * @param {Number} bunny - How many bunnies are in line
 * @returns {Number} - Returns how many bunny ears there are
 */
function bunnyEars2 (bunny) {
  if (bunny === 0) {
    return 0;
  } if (bunny % 2 === 1) {
    return 2 + bunnyEars2(bunny - 1);
  }
  return 3 + bunnyEars2(bunny - 1);
}