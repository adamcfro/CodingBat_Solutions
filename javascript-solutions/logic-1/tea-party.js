/**
 * Returns 0 if either parameter is less than 5, returns 2 if either parameter 
 * is double the other parameter, and returns 1 otherwise.
 * 
 * @param {Number} tea - The number of tea
 * @param {Number} candy - The number of candy
 * @returns {Number} - The party rating
 */
function teaParty (tea, candy) {
  let partyRating;
  if (tea < 5 || candy < 5) {
    partyRating = 0;
  } else if (tea >= (candy * 2) ||(candy >= (tea * 2))) {
    partyRating = 2;
  } else {
    partyRating = 1;
  }
  return partyRating;
}