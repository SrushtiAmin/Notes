// file: promptsExample.js
const prompts = require("prompts");

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "username",
      message: "Enter your name:",
    },
    {
      type: "number",
      name: "age",
      message: "Enter your age:",
    },
  ]);

  console.log(`Hello ${response.username}, you are ${response.age} years old.`);
})();
