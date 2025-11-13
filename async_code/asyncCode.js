const tasks = [
  { name: "Clean Desk", time: 1000 },
  { name: "Write Notes", time: 2000 },
  { name: "Review Code", time: 3000 },
];

// 1. Startup message — synchronous
console.log("Task Scheduler Started");

// 2. process.nextTick — initialize system immediately (microtask)
process.nextTick(() => {
  console.log("System Initialized — Ready to process tasks");
});

// 3. setImmediate — logs after setup phase
setImmediate(() => {
  console.log("Checking system status after setup...");
});

// 4. setInterval — show system heartbeat every 2 seconds
let heartbeat = 0;
const heartbeatId = setInterval(() => {
  heartbeat++;
  console.log(`System heartbeat: ${heartbeat}`);

  if (heartbeat === 5) {
    clearInterval(heartbeatId);
    console.log("Heartbeat stopped after 5 intervals");
  }
}, 2000);

// 5. Simulate running tasks using setTimeout (timer phase)
tasks.forEach((task, index) => {
  setTimeout(() => {
    console.log(`Completed task: ${task.name}`);
    if (index === tasks.length - 1) {
      console.log("All tasks completed");
    }
  }, task.time);
});

console.log("System Running... waiting for tasks to complete");
