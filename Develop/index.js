const inquirer = require("inquirer");
const fs = require("fs");

const readmeContent = ({ title, description, installation, usage, license, contributing, test, username, email }) => `

# ${title}
![License Badge](https://img.shields.io/badge/License-${license}-green)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation 
${installation}

# Usage 
${usage}

# License 
This application is covered under the ${license} license.

## Contributing 
${contributing}

## Tests 
${test}

## Questions 
For any additional questions or information, please contact me:
- Github: [${username}](https://github.com/${username})
- Email:  ${email}
`;


    inquirer
        .prompt([
        {
            type: "input",
            name: "title",
            message:"Enter your project title:",
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description for your project:",
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
            message:"Enter the contributing parties including yourself:",
        },
        {
            type: "input",
            name: "test",
            message:"Enter your project tests:",
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
        ])
        .then((answers) => {
            const readmePage = readmeContent(answers);

            fs.writeFile('README.md', readmePage, (err) =>
            err ? console.log(err) : console.log("Successfully created README.md file!")
            );
        })