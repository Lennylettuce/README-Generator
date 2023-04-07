// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license != 'None'){
    badge = '![License Badge](https://shields.io/badge/license-' + license + '-blue)';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  
  switch(license) {
    case 'MIT':
      link = 'https://mit-license.org/';
      break;
    case 'Apache':
      link = 'https://apache.org/licenses/LICENSE-2.0.html';
      break;
    case 'BSD':
      link = 'http://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL':
      link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


//save this dryer version 
// TODO: Create a function to generate markdown for README
/*const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  Any questions or comments should be directed to the following email: ${data.email}. 
  View more Lenny projects at https://github.com/${data.github}.
`;
}*/

module.exports = generateMarkdown;
