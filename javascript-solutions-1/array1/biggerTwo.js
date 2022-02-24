/**
 * Returns the array featuring a greater sum.
 * 
 * @param {Array} arr1        First array parameter
 * @param {Array} arr2        Second array parameter
 * @returns {Array}           Returns an array
 */
function biggerTwo (arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr2[i];
  }
  return (sumArr1 >= sumArr2) ? arr1 : arr2;
}