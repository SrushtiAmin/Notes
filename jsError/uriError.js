// uriError.js
try {
  decodeURI("%"); //incomplete escape sequence
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Message:", error.message);
}
