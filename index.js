const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./utils/questions');

const writeFileAsync = util.promisify(fs.writeFile);

generateMarkdown = (data) => {
    return `
    # ${data.title}
      ${data.badges}
      
  ---
  ## Contents
    1. [Description](#description)  
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credit](#credit)
    5. [License](#license)
    6. [Contribution](#contributing)
    7. [Tests](#tests)
  ---  
  ## Description
    ${data.description}  
    User Story  
    
    ${data.userStory}  
    Acceptance Criteria  
    ${data.acceptanceCriteria}
        
  ---
  ## Installation
    ${data.installation}
  ---
  ## Usage
    ${data.usage}  

    md
    ![alt text](assets/images/screenshot.png)
    
  ---
  ##  Credit
    ${data.credit}
  ---
  ##  Contribution
    ${data.contributing}
  ---
  ##  Tests
    ${data.test}` 
  }
  

const init = async() => {
  try {
    const reply = await inquirer.prompt(questions);
    let info = generateMarkdown(reply);
    await writeFileAsync('./README.md', info);
  } catch (err) {
  console.log(err);
  }
}

init();


