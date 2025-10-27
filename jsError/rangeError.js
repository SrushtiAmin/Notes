// rangeError.js
try {
  const arr = new Array(-5); //  invalid array length
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Message:", error.message);
}
