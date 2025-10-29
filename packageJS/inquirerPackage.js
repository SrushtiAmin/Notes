// file: inquirerPackage.js
(async () => {
  const inquirer = await import("inquirer");

  const answers = await inquirer.default.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your name:",
    },
    {
      type: "list",
      name: "language",
      message: "Choose your favorite language:",
      choices: ["JavaScript", "Python", "C++"],
    },
  ]);

  console.log(`Hello ${answers.username}, you love ${answers.language}.`);
})();
