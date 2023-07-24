// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('generate-markdown'); // This imports the function from the previous code

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'howToTest',
        message: 'How to test',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Questions(Email address)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Questions(Github address)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License',
        options: ['MIT','ISC','GNUPLv3','None'],
        filter(val){
            return val.toLowerCase();
        }
    },
];

//queary function
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers);
        return answers;
    })
    .catch((error)=> {
        console.log(error);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README file created successfully!')
    })
}
//This calls the runQuery function to start inquirer
runQuery().then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
});


// TODO: Create a function to initialize app
function initializeApp() {
    init();
}

// Function call to initialize app
function start(){
    initializeApp();
}

start();