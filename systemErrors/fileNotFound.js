// systemErrorExample.js
const fs = require("fs");

try {
  // Trying to read a file that doesn't exist
  const data = fs.readFileSync("not_existing_file.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error("A System Error Occurred!");
  console.error("Error Name:", err.name);         // Error
  console.error("Message:", err.message);         // e.g. ENOENT: no such file or directory
  console.error("Code:", err.code);               // e.g. ENOENT
  console.error("System Call:", err.syscall);     // e.g. open
  console.error("Path:", err.path);               // e.g. not_existing_file.txt
}
