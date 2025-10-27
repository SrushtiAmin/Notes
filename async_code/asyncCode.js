console.log("Program Start");

//  process.nextTick
process.nextTick(() => {
  console.log(" process.nextTick → Runs before all async tasks, even before setTimeout(0)");
});

// setTimeout
setTimeout(() => {
  console.log("setTimeout → Runs after at least 0 ms delay (Timer phase)");
}, 0);

// etImmediate
setImmediate(() => {
  console.log("setImmediate → Runs after the current event loop phase (Check phase)");
});

//setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`setInterval → Runs repeatedly, count = ${count}`);

  if (count === 3) {
    clearInterval(intervalId); // stop after 3 times
    console.log("setInterval stopped");
  }
}, 1000);

console.log("Program End");
