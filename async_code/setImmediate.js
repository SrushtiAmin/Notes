console.log("Before setImmediate");

setImmediate(() => {
  console.log("Inside setImmediate callback");
});

console.log("After setImmediate");
