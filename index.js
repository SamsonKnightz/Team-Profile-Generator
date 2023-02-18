const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const pageTemplate = require("./src/page-template");

const managerQuestions = ([
    {
        message: 'What is the mangers name?',
        name: "name",
    },
    {
        message: 'What is the mangers name?',
        name: "id",
    },
    {
        message: 'What is the mangers name?',
        name: "email",
    },
    {
        message: 'What is the mangers name?',
        name: "email",
    },
    {
        message: 'What is the mangers name?',
        name: "officeNumber",
    },
])
