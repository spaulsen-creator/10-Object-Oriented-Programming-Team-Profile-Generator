const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');





// const inquirer = require('inquirer');
// const fs = require('fs');
// // const path = require('path');
// const util = require('util');
// // const dist = require('./dist/generateHtml.html');

// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt([{
//             type: 'input',
//             name: 'title',
//             message: 'What is the project title?',
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Please provide a description of the project.',
//         },
//         {
//             type: 'input',
//             name: 'install',
//             message: 'What command should be used for installation?',
//             default: 'npm i',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'What does the user need to know about using this program?',
//         },
//         {
//             type: 'list',
//             name: 'license',
//             message: 'What license would you like to use for your project?',
//             choices: [
//                 'MIT',
//                 'Apache2.0',
//                 'GPL3.0',
//                 'BSD3',
//                 'None',
//             ]
//         },
//         {
//             type: 'input',
//             name: 'contributors',
//             message: 'Were their any contributors on this project?',
//         },
//         {

//             type: 'input',
//             name: 'tests',
//             message: 'What command should be used to run a test?',
//             default: 'npm run tests'
//         },
//         {
//             type: 'input',
//             name: 'questions',
//             message: 'What is your GitHub username?',

//         },
//         {
//             type: 'input',
//             name: 'questions2',
//             message: 'What is your email address?'
//         },
//     ]);
// };

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