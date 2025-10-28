// file: test.js
console.log("Current working directory:", process.cwd());
//dirname
console.log("__dirname:", __dirname);
//filename
console.log("__filename:", __filename);
//pathname
const path = require("path");

const filePath = "/Users/srushti/Projects/Notes/index.js";

console.log("Dirname:", path.dirname(filePath));
console.log("Basename:", path.basename(filePath));
console.log("Extname:", path.extname(filePath));
console.log("Parsed:", path.parse(filePath));
console.log("Joined:", path.join("Users", "srushti", "Projects"));



// current working directory
console.log("process.cwd():", process.cwd());

// directory name of current file
console.log("__dirname:", __dirname);

// absolute file name
console.log("__filename:", __filename);

// path module examples
console.log("path.basename(__filename):", path.basename(__filename));
console.log("path.dirname(__filename):", path.dirname(__filename));
console.log("path.extname(__filename):", path.extname(__filename));
console.log("path.parse(__filename):", path.parse(__filename));
console.log("path.join(__dirname, 'testFolder', 'file.txt'):", path.join(__dirname, 'testFolder', 'file.txt'));
