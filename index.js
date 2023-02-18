const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const pageTemplate = require("./src/page-template");

const prompt = inquirer.createPromptModule();
const teamMembers = [];

prompt([
    {
        message: 'What is the mangers name?',
        name: "name",
    },
    {
        message: 'What is the mangers id?',
        name: "id",
    },
    {
        message: 'What is the mangers email?',
        name: "email",
    },
    {
        message: 'What is the mangers office number?',
        name: "officeNumber",
    },
]).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager( name, id, email, officeNumber );
    teamMembers.push(manager);
})
