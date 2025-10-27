// evalError.js
try {
  throw new EvalError("Invalid use of eval()");
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Message:", error.message);
}
