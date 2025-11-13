// Check the global object in Node.js

// In Node.js, 'global' is the top-level object (like window in browsers)
console.log("Using global:", global.myName); // undefined initially

// Add a property to the global object
global.myName = "Srushti";
console.log("After adding property using global:", global.myName);

// globalThis works both in Node.js and browsers
globalThis.myAge = 21;
console.log("Using globalThis:", globalThis.myAge);

// 'this' at the top level (in Node.js module) does NOT refer to the global object
console.log("Top-level this:", this === global); // false

// But inside a function (non-arrow), it refers to the global object in non-strict mode
function showThis() {
  console.log("Inside function - is this global?", this === global);
}
showThis();
