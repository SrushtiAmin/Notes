// file: globExample.js
const glob = require("glob");

glob("**/*.js", (err, files) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("JavaScript files found:");
  console.log(files);
});
