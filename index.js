"use strict";

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (input) => {
        if (input.length) {
          return true;
        }
        return "Please enter a name";
      },
    }, // Add a comma here
    {
      type: "list",
      name: "Ruby, Python, Java or JavaScript",
      message: "What's your favorite programming language?",
      choices: ["Ruby", "Python", "Java", "JavaScript"],
    },
    {
      type: "input",
      name: "editor",
      message: "Which text editor do you use?",
      validate: (input) => {
        if (input.length) {
          return true;
        }
        return "Please enter a text editor";
      },
    },
    // Rest of the questions...
  ])
  .then((answers) => console.log(answers));
