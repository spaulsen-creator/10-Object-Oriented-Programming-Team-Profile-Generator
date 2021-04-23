const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamMembers = [];

const askManager = [{
        type: 'imput',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'imput',
        name: 'id',
        message: 'What is your manager id?',
    },
    {
        type: 'imput',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'imput',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
    {
        type: 'imput',
        name: 'members',
        message: 'Select the role of any team member to be added to the directory.',
        choices: ['Engineer', 'Employee', 'Intern', 'None to add'],
    },
];

const askEngineer = () => {
    inquirer
        .prompt([{
            type: 'imput',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'imput',
            name: 'id',
            message: 'What is your engineer id?',
        },
        {
            type: 'imput',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'imput',
            name: 'github',
            message: 'What is your GitHub user name?',
        },
        {
            type: 'imput',
            name: 'members',
            message: 'Select the role of any team member to be added to the directory.',
            choices: ['Engineer', 'Employee', 'Intern', 'None to add'],
        },
        
    ])
    then((data) => {
        teamMembers.push(
            new Engineer(data.name, data.id, data.email, data.github)
        );

        if (data.members === "Engineer") {
            askEngineer();
        } else if (data.members === "Intern") {
            askIntern();
        } else {
            let data = generateHTML(teamMembers);
            fs.writeFileSync('team.html', data, 'utf-8');

        }
    });
};
    
const askIntern = () => {
    inquirer
        .prompt([{
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'imput',
            name: 'name',
            message: 'What is the team managers name?',
        },
    ])
}   
then((data) => {
    teamMembers.push(
        new Engineer(data.name, data.id, data.email, data.github)
    );

    if (data.members === "Engineer") {
        askEngineer();
    } else if (data.members === "Intern") {
        askIntern();
    } else {
        let data = generateHTML(teamMembers);
        fs.writeFileSync('team.html', data, 'utf-8');

    }
});


        

        // const generateHTML = (answers) =>
        //     `<!DOCTYPE html>
        //   <html lang="en">
        //   <head>
        //     <meta charset="UTF-8">
        //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
        //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        //     <title>Document</title>
        //   </head>
        //   <body>
        //     <div class="jumbotron jumbotron-fluid">
        //     <div class="container">
        //       <h1 class="display-4">Hi! My name is ${answers.title}</h1>
        //       <p class="lead">I am from ${answers.description}.</p>
        //       <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        //       <ul class="list-group">
        //         <li class="list-group-item">My GitHub username is ${answers.question}</li>
        //         <li class="list-group-item">LinkedIn: ${answers.question2}</li>
        //       </ul>
        //     </div>
        //   </div>
        //   </body>
        //   </html>`;

        // const init = () => {
        //     promptUser()
        //         .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
        //         .then(() => console.log('Successfully wrote to index.html'))
        //         .catch((err) => console.error(err));
        // };

        // init();

        // .then(function (response) {
        //     fs.writeFile(path.join(process.cwd(), 'team.html'),

        // ``
        // , (err) =>
        //         err ? console.log(err) : console.log('README created successfully!'))

        // })

        // function init() {

        // }

        // init();