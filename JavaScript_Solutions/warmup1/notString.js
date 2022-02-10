/*
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.
*/

/**
 * 
 * @param {String} string - any given string
 * @returns {String} - returns original string or string with 'not' prepended to it
 */
function notString (string) {
  if (string.slice(0, 3) === 'not') {
    return string;
  } else {
    return 'not ' + string;
  }
}