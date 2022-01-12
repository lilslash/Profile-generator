const inquirer = require('inquirer')
const fs = require('fs')
// const Members = require('./lib/members')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const teamCreate = require('./teamCreate')

const allMembers = []





const managerQuestion = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'Enter name of manager'
        },
        {
            type: 'input',
            name:'idNum',
            message:"Enter manager's ID number"
        },
        {
            type: 'input',
            name:'email',
            message:"Enter manager's email address"
        },
        {
            type: 'input',
            name:'officeNum',
            message:"Enter manager's office number"
        },
    ])
    .then(answer => {
        const manager = new Manager(answer.name, answer.idNum, answer.email, answer.officeNum)
        allMembers.push(manager)
        nextMember()
    })
}
const internQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'Enter name of intern'
        },
        {
            type: 'input',
            name:'idNum',
            message:"Enter intern's ID number"
        },
        {
            type: 'input',
            name:'email',
            message:"Enter intern's email address"
        },
        {
            type: 'input',
            name:'school',
            message:"Enter intern's school"
        },
    ])
    .then(answer => {
        const intern = new Intern(answer.name, answer.idNum, answer.email, answer.school)
        allMembers.push(intern)
        nextMember()
    })
}
const engineerQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'Enter name of engineer'
        },
        {
            type: 'input',
            name:'idNum',
            message:"Enter engineer's ID number"
        },
        {
            type: 'input',
            name:'email',
            message:"Enter engineer's email address"
        },
        {
            type: 'input',
            name:'github',
            message:"Enter engineer's github"
        },
    ])
    .then(answer => {
        const engineer = new Engineer(answer.name, answer.idNum, answer.email, answer.github)
        allMembers.push(engineer)
        nextMember()
    })
}

const nextMember = () => {
   inquirer.prompt ({
       type: 'list',
       message: 'Choose a member to create',
       choices:['Manager','Engineer', 'Intern', 'Finish and create html'],
       name: 'nextMem'
   }).then (answer => {
       const choices = answer.nextMem
    if (choices === "Manager") {
        managerQuestion()
    } else if (choices === "Intern") {
        internQuestions()
    } else if (choices === "Engineer") {
        engineerQuestions()
    } else {
        writeToFile('dist/index.html', teamCreate(allMembers))
    }
   })
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};


const init = () => nextMember()

init()