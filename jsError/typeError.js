// typeError.js
try {
  const num = 10;
  num(); //  numbers can't be called like a function
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Message:", error.message);
}