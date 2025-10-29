// uncaughtErrorExample.js
function divide(a, b) {
  return a / b;
}

function calculate() {
  console.log("Starting calculation...");
  const result = divide(10, 0);
  if (!isFinite(result)) {
    throw new Error("Cannot divide by zero!");
  }
  console.log("Result:", result);
}

calculate(); // Uncaught error here

console.log("Program continues...");
