/**
 * Returns true if all elements in the inner parameter appear in the
 * outer parameter. Both arrays will already be in sorted order
 * 
 * @param {Array} outer - First array parameter
 * @param {Array} inner - Second array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function linearIn (outer, inner) {
  let booleanArray = [];
  for (let i = 0, j = 0; i < outer.length; i++) {
    if (outer[i] === inner[j]) {
      i = 0;
      j += 1;
      booleanArray.push(0);
    }
  }
  return booleanArray.length === inner.length;
}