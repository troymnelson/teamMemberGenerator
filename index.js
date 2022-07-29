
// import needed classes/libraries

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

// create arrays for questions asked
const questions = [
    {
        name: 'userName',
        message: 'What is your name?'
    },
    {
        name: 'empId',
        message: 'What is your employee ID?'
    },
    {
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'addOn',
        message: 'Do you need to add on to the Employee class?',
        choices: [
            'Yes, Manager', 'Yes, Engineer', 'Yes, Intern'
        ],
        default: 'Yes, Engineer'
    }
];


const questionsForManager = [
    {
        name: 'officeNumber',
        message: 'What is your office number?'
    }
];

const questionsForEngineer = [
    {
        name: 'github',
        message: 'What is your github?'
    }
];

const questionsForIntern = [
    {
        name: 'school',
        message: 'What school are you currently attending?'
    }
];


//start html file
const html = `<!DOCTYPE html>
          <html>
          <head>
              <title>Team Profile Generator</title>
              <link rel="stylesheet" href="./css/styles.css">
          </head>
          <body>
          <header class="main-header">
              <h1 class="main-header-text">My Team</h1>
          </header>

          <main class="wrapper">`

fs.writeFile('./dist/index.html', html, (err) => {
    if (err) {
        console.log(err);
    }
})

 function askQuestions() {
    // prompt user questions
    inquirer
        .prompt(questions)

        // with answers assign them to variables 
        .then((answers) => {
            const userName = answers.userName;
            const empId = answers.empId;
            const email = answers.email;

            // assign variables to new employee object
            const user = new Employee(userName, empId, email)
            if (answers.addOn == 'Yes, Manager') {
                inquirer
                    .prompt(questionsForManager)
                    .then((answers) => {
                        const userManager = new Manager(userName, empId, email, answers.officeNumber)
                        const data = `<div class="box">
                          <header class="box-header">
                              <h2>${userManager.getName()}</h2>
                              <h3>${userManager.getRole()}</h3>
                          </header>
                          <hr>
                          <section>
                              <article>
                                  <p>ID: ${userManager.getEmpId()}</p>
                                  <p>Email: <a href="mailto:${userManager.getEmail()}">${userManager.getEmail()}</a></p>
                                  <p>Office Number: ${userManager.getOfficeNumber()}</p>
                              </article>
                          </section>
                          </div>`;
                        fs.appendFile('./dist/index.html', data, (err) => {
                            if (err) {
                                console.log(err);
                            }
                        })
                        keepGoing();
                    });
            } else if (answers.addOn == 'Yes, Engineer') {
                inquirer
                    .prompt(questionsForEngineer)
                    .then((answers) => {
                        const userEngineer = new Engineer(userName, empId, email, answers.github);
                        const data = `<div class="box">
                          <header class="box-header">
                              <h2>${userEngineer.getName()}</h2>
                              <h3>${userEngineer.getRole()}</h3>
                          </header>
                          <hr>
                          <section>
                              <article>
                                  <p>ID: ${userEngineer.getEmpId()}</p>
                                  <p>Email: <a href="mailto:${userEngineer.getEmail()}">${userEngineer.getEmail()}</a></p>
                                  <p>Github: <a href="${userEngineer.getGithub()}">${userEngineer.getGithub()}</a></p>
                              </article>
                          </section>
                          </div>`;
                        fs.appendFile('./dist/index.html', data, (err) => {
                            if (err) {
                                console.log(err);
                            }
                        })
                        keepGoing();
                    });
            } else if (answers.addOn == 'Yes, Intern') {
                inquirer
                    .prompt(questionsForIntern)
                    .then((answers) => {
                        const userIntern = new Intern(userName, empId, email, answers.school);
                        const data = `<div class="box">
                          <header class="box-header">
                              <h2>${userIntern.getName()}</h2>
                              <h3>${userIntern.getRole()}</h3>
                          </header>
                          <hr>
                          <section>
                              <article>
                                  <p>ID: ${userIntern.getEmpId()}</p>
                                  <p>Email: <a href="mailto:${userIntern.getEmail()}">${userIntern.getEmail()}</a></p>
                                  <p>School: ${userIntern.getSchool()}</p>
                              </article>
                          </section>
                          </div>`;
                        fs.appendFile('./dist/index.html', data, (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        keepGoing();
                    });
            } else {
                const data = `<div class="box">
  <header class="box-header">
      <h2>${user.getName()}</h2>
      <h3>${user.getRole()}</h3>
  </header>
  <hr>
  <section>
      <article>
          <p>ID: ${user.getEmpId()}</p>
          <p>Email: ${user.getEmail()}</p>
      </article>
  </section>
  </div>`;
                fs.appendFile('./dist/index.html', data, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }

        })

    

}


const keepGoing = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'keepGoing',
                message: 'Add another employee?',
                choices: [
                    'yes', 'no'
                ]
            }
        ])
        .then((answer) => {
            if (answer.keepGoing == 'yes') {
                askQuestions();
            } else {
                return;
            }
        })
}


askQuestions();