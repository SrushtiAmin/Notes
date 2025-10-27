// diskFullError.js
const fs = require("fs");

try {
  // Simulate disk full situation
  const err = new Error("No space left on device");
  err.code = "ENOSPC"; // Error NO SPaCe
  throw err;
} catch (err) {
  console.error("Disk Full Error");
  console.error("Code:", err.code);        // ENOSPC
  console.error("Message:", err.message);
}
