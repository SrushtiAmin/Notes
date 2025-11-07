import { fork } from "child_process";

const MAX = 10000;
const mid = Math.floor(MAX / 2);

const child1 = fork("./cpuTask.js");
const child2 = fork("./cpuTask.js");

let results = [];
let finished = 0;

function handleMessage(msg) {
  results = results.concat(msg.primes);
  finished++;
  if (finished === 2) {
    console.log("Total primes:", results.length);
  }
}

child1.on("message", handleMessage);
child2.on("message", handleMessage);

child1.send({ start: 2, end: mid });
child2.send({ start: mid + 1, end: MAX });
