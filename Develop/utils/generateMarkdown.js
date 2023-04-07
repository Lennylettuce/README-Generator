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
function renderLicenseSection(license) {
  let section = '';

  if(license != 'None'){
    section += '## License\n'
    section += 'Checkout' + renderLicenseLink(license) + 'for this project license information.';
  }
  return section;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const readmeSections = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'LIcense', 'Questions'];

  let markdown = '#' + data.title + '\n';

  markdown += renderLicenseBadge(data.license) + '\n';

  markdown += '## Table of Contents\n';
  for (let i=0; i<readmeSections.length; i++) {
    if(! (readmeSections[i] === 'License' && data.license === 'None')){
      markdown += i+1 + '. [' + readmeSections[i] + '](#' + readmeSections[i][0].toLowerCase() + readmeSections[i].substring(1) + ')\n';
    }
  }
  markdown += '\n';

  //description 
  markdown += '##' + readmeSections[0] + '\n';
  markdown += data.description + '\n';

  //installation
  markdown += '##' + readmeSections[1] + '\n';
  markdown += data.install + '\n';

  //usage
  markdown += '##' + readmeSections[2] + '\n';
  markdown += data.usage + '\n';

  //contribution
  markdown += '##' + readmeSections[3] + '\n';
  markdown += data.contributors + '\n';

  //testing
  markdown += '##' + readmeSections[4] + '\n';
  markdown += data.test + '\n';

  //license
  markdown += renderLicenseSection(data.license) + '\n';

  //questions
  markdown += '##' + readmeSections[6] + '\n';
  markdown += 'Checkout other projects [HERE](https://github.com/' + data.username + ') on Github \n';
  markdown += 'Direct any questions to ' + data.email + '. \n';

  return markdown;

}

module.exports = generateMarkdown;


//save this dryer version 
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