/**
 * Returns an array of length 3 containing the first 3 digits of Pi.
 * 
 * @returns {Array} - Returns an array of the first 3 digits of Pi
 */
function makePi () {
  let pi = Math.PI.toFixed(2);
  let piString = pi.toString().replace('.', '');
  let piArr = Array.from(piString);
  return piArr;
}