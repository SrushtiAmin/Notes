// console.log(process.argv);
// const numbers = process.argv.slice(2).map(Number);
// const sum = numbers.reduce((a, b) => a + b, 0);
// console.log("Sum:", sum);


// const name = process.argv[2];
// const age = process.argv[3];

// if (!name || !age) {
//   console.log("Usage: node cliApp.js<name><age>");
// } else {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }
// Get command-line arguments, ignoring the first two default ones
// const args = process.argv.slice(2);

// If no name is given, show usage info
// if (args.length === 0) {
//   console.log("Usage: node cliApp.js <name>");
//   process.exit(1); // Exit the program
// }

// // Extract the first argument (the name)
// const name = args[0];

// console.log(`Hello, ${name}! Welcome to your first CLI app.`);
// fsExample.js
const fs = require("fs");

const filename = "message.txt";
fs.writeFileSync(filename, "Hello from CLI app!");

const content = fs.readFileSync(filename, "utf8");
console.log("File content:", content);
