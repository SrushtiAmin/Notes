// timer.js
import dotenv from "dotenv";
import chalk from "chalk";
import inquirer from "inquirer";
import cliProgress from "cli-progress";

// 1. Load environment variables
dotenv.config();

// 2. Access environment variable using process.env
const user = process.env.DEFAULT_USER || "Guest";

// 3. Parse command-line arguments manually
// Example: node timer.js study 5
const [,, argTask, argMinutes] = process.argv;

console.log(chalk.cyan(`Hello, ${user}!`));

// Helper: Sleep function
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// 4. Function to get task & duration
async function getTaskInfo() {
  let task = argTask;
  let minutes = argMinutes;

  if (!task || !minutes) {
    console.log(chalk.yellow("No command-line args provided. Using prompts..."));
    const response = await inquirer.prompt([
      { type: "input", name: "task", message: "Enter task name:" },
      { type: "number", name: "minutes", message: "Enter duration (in seconds):" },
    ]);
    task = response.task;
    minutes = response.minutes;
  }

  if (!task || isNaN(minutes) || minutes <= 0) {
    console.error(chalk.red("Invalid task or duration."));
    process.exitCode = 1; // non-zero indicates error
    process.exit();
  }

  return { task, minutes };
}

// 5. Main timer logic
async function runTimer() {
  const { task, minutes } = await getTaskInfo();

  console.log(chalk.green(`Starting task: "${task}" for ${minutes} seconds.`));

  // Create progress bar
  const bar = new cliProgress.SingleBar(
    {
      format: chalk.magentaBright("Progress") + " [{bar}] {percentage}% | ETA: {eta_formatted}",
    },
    cliProgress.Presets.shades_classic
  );

  bar.start(minutes, 0);

  for (let i = 0; i < minutes; i++) {
    await sleep(1000);
    bar.update(i + 1);
  }

  bar.stop();

  console.log(chalk.greenBright(`Task "${task}" completed successfully!`));
  process.exitCode = 0; // success
  process.exit();
}

// 6. Optional: Take simple input using process.stdin
// process.stdin.on("data", (data) => {
//   console.log(chalk.gray("You typed:"), data.toString().trim());
// });

// 7. Run
runTimer().catch((err) => {
  console.error(chalk.red("Unexpected Error:"), err);
  process.exitCode = 1;
  process.exit();
});
