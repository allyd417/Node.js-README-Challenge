// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  let badge;
  switch (license.toLowerCase()) {
    case 'mit':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)';
      break; // Add break statement to avoid executing subsequent cases
    case 'isc':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'gnuplv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
}
  // the license links are returned based on the license value
  switch (license.toLowerCase()) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'isc':
      return 'https://opensource.org/licenses/ISC';
    case 'gnuplv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  // the license section is constructed with the badge and link based on the license value
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return `
## License
${badge}

This project is licensed under the [${license} License](${link}).
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title};

  ${licenseSection}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact ${data.author} via:

- Email: ${data.email}
- GitHub: [${data.username}]
`;
}

module.exports = generateMarkdown;

