/**
 * Given a key array (correct answers) and an answers array (student's answers),
 * return the score of the student's answers to an exam. Elements in the 
 * answersArr that line up with elements in the keyArray count +4, wrong answers
 * count -1, and answers with a '?' receive 0. 
 * 
 * @param {Array} keyArr      A string array of correct answers to a test
 * @param {Array} answersArr  A string array of a student's answers
 * @returns {Number}          Returns a count number
 */
function scoreUp (keyArr, answersArr) {
  let score = 0;
  for (let i = 0; i < keyArr.length; i++) {
    if (keyArr[i] === answersArr[i]) {
      score += 4;
    } else if (answersArr[i] !== '?') {
      score -= 1;
    }
  }
  return score;
}