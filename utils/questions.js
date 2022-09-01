const { type } = require("os")

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your Project',
        validate:(value)=>{if(value){return true} else {return 'Provide name of project'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following as a guide (What was your motivation?; Why did you build this project?; What problem does it solve?; What did you learn?).',
        validate:(value)=>{if(value){return true} else {return 'provide description'}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: Provide a step-by-step description of how to get the development environment running.',
        validate:(value)=>{if(value){return true} else {return 'what are your steps to install'}}
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an "assets/image" folder in your repository and upload your screenshot to it.',
        validate:(value)=>{if(value){return true} else {return 'Enter usage info'}}
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
        validate:(value)=>{if(value){return true} else {return 'Enter collabs'}}
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines if allowing developers to contribute: Not sure on where to start? Contributor Covenant v2.1 is a good starting point "https://www.contributor-covenant.org/version/2/1/code_of_conduct".',
      validate:(value)=>{if(value){return true} else {return 'contributing'}}
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        validate:(value)=>{if(value){return true} else {return ''}}
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your linkedIn URL?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    }, 
    ]

    module.exports = questions;