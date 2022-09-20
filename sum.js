// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
// get rid of the first two arguments
const args = process.argv.slice(2);
console.log('Args:', args);

// Edge case: We need at least 2 arguments.

// create an accumulator
let total = 0;

// iterate through the arguments
for (let arg of args) {
  // add the arg (string) to the acculumator => typecast the arg into a number
  //
  total += Number(arg);
  console.log('arg:', arg, 'total:', total, 'type:', typeof arg);
}

// Edge case: If any argument is not a whole number, skip it.
// Edge case: If any argument is not a number, output an error message.

// print the total
console.log("Total:", total);