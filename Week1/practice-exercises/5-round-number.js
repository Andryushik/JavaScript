/**
 * Follow the commented steps to write a piece of code
 */

 // 1. Declare a variable z and assign the number 7.25 to it.
let z = 7.25;

 // 2. Write a console.log statement in which you log the value of z.
console.log('z value is ' + z);

 // 3. Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.round(z);

 // 4. Write a console.log statement in which you log the value of a.
console.log('a value is ' + a);

 // 5. So now we have z and a find a way to compare the two values and log true if a is greater than z or false if a is smaller than z.
if (a > z) {
 console.log(true);
} else {
 console.log(false);
}
