 /**
  * Returns the difference between the largest and smallest values in an array.
  * 
  * @param {Array} arr        An array of numbers
  * @returns {Number}         Returns a number
  */
 function bigDiff (arr) {
   let small = arr[0];
   let large = arr[0];
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < small) {
       small = arr[i];
     } else if (arr[i] > large) {
       large = arr[i];
     }
   }
   return large - small;
 }