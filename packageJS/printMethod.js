// Example of writing to stdout
process.stdout.write("This is a message written to standard output.\n");

// Example of writing to stderr
process.stderr.write("This is an error message written to standard error.\n");

// Using console.log (which by default writes to stdout)
console.log("This message also goes to standard output.");

// Using console.error (which by default writes to stderr)
console.error("This error also goes to standard error.");

// Simulating a condition where an error might occur
const someValue = -5;
if (someValue < 0) {
  process.stderr.write(`Error: Invalid value ${someValue}. Value must be non-negative.\n`);
} else {
  process.stdout.write(`Processing value: ${someValue}\n`);
}