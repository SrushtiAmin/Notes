// file: stdinExample.js
process.stdout.write("Enter your name: ");

process.stdin.on("data", (data) => {
  console.log(`Hello, ${data.toString().trim()}!`);
  process.exit();
});
