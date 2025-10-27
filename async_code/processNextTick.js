console.log("Start");

process.nextTick(() => {
  console.log("Inside process.nextTick callback");
});

console.log("End");
