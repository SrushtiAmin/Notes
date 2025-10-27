// permissionDenied.js
const fs = require("fs");

try {
  // Trying to write in a restricted system directory
  fs.writeFileSync("/root/protected.txt", "Hello, world!");
  console.log("File written successfully!");
} catch (err) {
  console.error("Permission Denied Error");
  console.error("Code:", err.code);        // EACCES
  console.error("Message:", err.message);
  console.error("Path:", err.path);
  console.error("Syscall:", err.syscall);
}
