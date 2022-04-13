/**
 * Recursively computes and returns a modified string where all
 * appearances of 'pi' have been replaced by '3.14'.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a modified string
 */
function changePi (str) {
  if (str.length === 0) {
    return str;
  }
  if (str.substring(0, 2) === 'pi') {
    return '3.14' + changePi(str.substring(2));
  } else {
    return str[0] + changePi(str.substring(1));
  }
}