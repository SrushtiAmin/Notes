// networkError.js
const http = require("http");

const options = {
  hostname: "nonexistent-server.example.com", // invalid domain
  port: 80,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
});

req.on("error", (err) => {
  console.error("Network Error Occurred!");
  console.error("Code:", err.code);// ENOTFOUND or ECONNREFUSED
  console.error("Message:", err.message);
  console.error("Syscall:", err.syscall);
});

req.end();
