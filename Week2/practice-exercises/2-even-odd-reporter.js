/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

let num = 0;
do {
  if (num % 2 == 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
  num++
  } while (num <= 20);
