const fs = require("fs");
//write
fs.writeFileSync("example.txt", "Hello, this is Srushti!");
console.log("File written successfully!");
//read
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", data);
//append
fs.appendFileSync("example.txt", "\nAdding more content...");
console.log("Data appended!");
//delete
fs.unlinkSync("example.txt");
console.log("File deleted!");
