# LucaNet Web Testing Framework

This project contains automated tests for the Lucanet website using Playwright with TypeScript.
The created tests are for the homepage and the contact page.

For homepage tests:
1. Wait for page load, allow cookies and verify hero heading
2. Verify that page title is CFO Solution Platform for modern finance leaders :: Lucanet
3. Verify that navbar is visible and enabled
4. Verify that footer links are visible and enabled
5. Verify that solutions page hero image is visible and enabled (after clicking on the solutions link in the navbar)

For contact page tests:
1. Fill out the contact form but do not send the request to not flood the production environment with test requests.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. You will need to create a .env file in the root of the project with the following variables: 
    ENVIRONMENT=PROD
4. You will need to create a config.json file in the root of the project with the prod URLS for the website homepage, contact page and solutions page. (Will be provided in the email).

5. Run `npx playwright test` to run the tests

CI/CD: 
1. The tests are run on GitHub Actions with the workflow file in `.github/workflows/playwright.yml`
2. The workflow file is configured to run the tests on the PROD environment.
3. The workflow can be run manually by clicking the `Run workflow` button in the GitHub Actions dashboard. 
4. The workflow is autmatically run when a PR is created or when a push is made to the main branch.

## Technical Approach

### Architecture
- **Page Object Model (POM)**: Implemented to maintain clean separation of concerns and improve test maintenance
- **Configuration Management**: Uses environment variables and config files for flexible environment switching supporting GitHub Actions CI/CD pipeline environments and variables
- **Data-Driven Testing**: Test data stored in JSON files for easy maintenance
- **Type Safety**: TypeScript for better code quality and IDE support

### Key Features
1. **Environment Management**
   - Configurable through environment variables
   - Separate configurations for different environments
   - Sensitive data protected via .env and config.json (not committed)

2. **Test Data Management**
   - Form data stored in JSON files
   - Easy to modify test data without changing test code


3. **Reusable Components**
   - Common utilities for cookie handling
   - Shared page navigation methods
   - Reusable form filling functions

4. **Test Reports**
   - Built-in Playwright HTML reports
   - Screenshot capture capability


### Best Practices
- Clear naming conventions
- Regular cleanup of test data and state
- Git-ignored sensitive configuration files

## Maintenance

- Update test data in `data/` directory
- Modify page objects in `pages/` directory when UI changes
- Add new test cases in `tests/` directory
- Update environment variables in `.env` for different environments

## Contact

For questions or issues, please contact me at dragotoiug@gmail.com