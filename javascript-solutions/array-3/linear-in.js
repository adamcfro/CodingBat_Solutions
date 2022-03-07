/**
 * Returns true if all elements in the inner parameter appear in the
 * outer parameter. Both arrays will already be in sorted order
 * 
 * @param {Array} outer - First array parameter
 * @param {Array} inner - Second array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function linearIn (outer, inner) {
  let count = 0;
  for (let i = 0, j = 0; i < outer.length; i++) {
    if (outer[i] === inner[j]) {
      j += 1;
      count += 1;
    }
  }
  return count === inner.length;
}