/**
 * A simple alarm clock function that displays what time we should wake up. Returns 'off' if it is a weekend and we are on vacation. Returns 10 if it is the weekend and we are not on vacation. Returns 7 otherwise.
 * 
 * @param {Number} day          A number corresponding to the day of the week
 * @param {Boolean} onVacation  If we are on vacation
 * @returns 
 */
function alarmClock (day, onVacation) {
  let weekendDays = [0, 6];
  let hour;
  if (onVacation && weekendDays.includes(day)) {
    return "Off";
  } else if (onVacation && !weekendDays.includes(day)) {
    hour = 10;
  } else {
    hour = 7;
  }
  return `"${hour}:00"`
}