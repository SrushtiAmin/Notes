// file: cliProgress.js
import cliProgress from "cli-progress";

// Create a new progress bar instance
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// Start the bar (total = 100)
bar.start(100, 0);

let value = 0;
const timer = setInterval(() => {
  value++;
  bar.update(value); // update bar progress

  if (value === 100) {
    clearInterval(timer);
    bar.stop(); // stop when done
    console.log("Task complete!");
  }
}, 50);
