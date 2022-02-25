/**
 * We have data for two users, A and B, each with a String name and an int id. 
 * The goal is to order the users such as for sorting. Return -1 if A comes 
 * before B, 1 if A comes after B, and 0 if they are the same. Order first by 
 * the string names, and then by the id numbers if the names are the same.
 * 
 * @param {String} userA      First string parameter
 * @param {Number} idA        First number parameter
 * @param {String} userB      Second string parameter
 * @param {Number} idB        Second number parameter
 * @returns {Number}          Returns a number corresponding to proper sorting 
 *                            order
 */
function userCompare (userA, idA, userB, idB) {
  let sorted;
  if (userA === userB && idA === idB) {
    sorted = 0;
  } else if (userA < userB) {
    sorted = -1;
  } else {
    sorted = 1;
  }
  return sorted;
}