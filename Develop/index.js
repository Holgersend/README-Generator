const inquirer = require("inquirer");
const fs = require("fs");

    inquirer
        .prompt([
        {
            type: "input",
            name: "title",
            message:"Enter your proyect title:",
        },
        {
            type: "input",
            name: "installation",
            message:"Enter your installation instructions:",
        },
        {
            type: "input",
            name: "usage",
            message:"Enter the project usage:",
        },
        {
            type: "checkbox",
            name: "license",
            message:"Select the license you used for this project:",
            choices:["MIT", "PortgreSQL", "ISC", "Mozilla Public License", "The Unlicense", "Boost"],
        },
        {
            type: "input",
            name: "contributing",
            message:"Enter the contributing parties includint yourself:",
        },
        {
            type: "input",
            name: "test",
            message:"Enter your proyect tests:",
        },
        {
            type: "input",
            name: "username",
            message:"Enter your gitHub username:",
        },
        {
            type:"input",
            name:"email",
            message:"Enter your Email:",
        }
        ]);