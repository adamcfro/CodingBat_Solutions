/**
 * Recursively finds and returns the nth Fibonacci number.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns the nth Fibonacci number
 */
function fibonacci (num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}