/**
 * Returns the results of a speeding ticket. If it is your birthday, your speed can be 5 greater. Returns 2 (big ticket) if speed is greater than 80, returns 1 (small ticket) if speed is between 61 and 80, inclusive. Returns 0 otherwise.
 * 
 * @param {Number} speed        A number parameter
 * @param {Boolean} isBirthday  If it is user's birthday
 * @returns 
 */
function caughtSpeeding (speed, isBirthday) {
  let totalSpeed = (isBirthday) ? (speed - 5) : speed;
  let ticketSeverity;
  if (totalSpeed >= 61 && totalSpeed <= 80) {
    ticketSeverity = 1;
  } else {
    ticketSeverity = (totalSpeed > 80) ? 2 : 0;
  }
  return ticketSeverity;
}