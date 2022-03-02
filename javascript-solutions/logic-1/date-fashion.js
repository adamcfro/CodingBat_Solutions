/**
 * Returns 2 if either of the parameters is greater than or equal to 8 and 
 * neither parameter is less than or equal to 2, in which case function 
 * returns 0. Otherwise, returns 1.
 * 
 * @param {Number} yourClothes - A number in the range 0-10
 * @param {Number} dateClothes - A number in the range 0-10
 */
function dateFashion (yourClothes, dateClothes) {
  let isStylish = (yourClothes >= 8 || dateClothes >= 8);
  let isNotStylish = (yourClothes <= 2 || dateClothes <= 2);
  if (isStylish && !isNotStylish) {
    return 2;
  } else if (isNotStylish) {
    return 0;
  } else {
    return 1;
  }
}