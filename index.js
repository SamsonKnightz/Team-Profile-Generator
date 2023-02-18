const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

prompt([
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
]);

prompt(managerQuestions)
.then({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
})
.then(() => {
    prompt({
        message: "would you like to add more employee",
        type: "confirm",
        name: "addMore",
    })
})
.then(({addMore}) => {
    if (addMore) {
        console.log("continue");
    } else {
        console.log("WRITE FILE");
    }
})
.then(() => {
    return prompt({
        type: "rawlist",
        message: "what kind of emploee would you like to add:",
        choices : [
            "Engineer",
            "Intern",
            "Manager",
        ],
        name:"type"
    })
})
.then(({ type }) => {
    switch(type) {
        case "Engineer": {
            return prompt(engineerQuestions);
        }
    }
})