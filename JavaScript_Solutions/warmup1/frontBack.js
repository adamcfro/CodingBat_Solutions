/*
Given a string, return a new string where the first and last chars have been exchanged.
*/

/**
 * 
 * @param {String} string - a given string
 * @returns - given string with first and last characters swapped
 */
function frontBack (string) {
  return string.slice(-1) + string.slice(1, -1) + string.slice(0, 1);
}