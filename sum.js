// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
// get rid of the first two arguments
const args = process.argv.slice(2);
console.log('Args:', args);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log('Please enter at least 2 arguments');
  // stop the execution
  // what's the purpose of a return => return a value outputted by a function => side effect => exiting the function.
  // return;
  process.exit(); // <= reveal my intent
}

// create an accumulator
let total = 0;

// iterate through the arguments
for (let arg of args) {
  // add the arg (string) to the acculumator => typecast the arg into a number
  //
  // Edge case: If any argument is not a whole number, skip it.
  // Number(arg) % 1 === 0
  // isInteger

  const convertedNb = Number(arg);

  if (Number.isInteger(convertedNb)) {
    total += convertedNb;
    console.log('arg:', arg, 'total:', total);
  }

  // Edge case: If any argument is not a number, output an error message.

  if (isNaN(convertedNb)) {
    console.log('Please enter only numbers');
    process.exit();
  }
}

// print the total
console.log('Total:', total);
