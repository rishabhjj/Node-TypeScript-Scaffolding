Micro Services Boiler Plate -- Will update the ReadMe with things added

Clone the Repository: git clone https://rishabhjj@bitbucket.org/rishabhjj/node_microservice_boilerplate.git

To Install NPM Packages: Run npm install

Start the server: npm run local

validate server with api: http://localhost:3000/_status

Summary: This can be quickstart any node express project with all the basic utilities available.

To Build Project: npm run build

To start development environment: npm run dev

For Running test cases: npm run test

For Getting Code Coverage: npm run coverage

For checking lint status of code repo: npm run lint

For swagger documentation end point: http://localhost:3000/api-doc

For Build Docker Image (To be in this repo): docker build -t micro . 

Sample API's:

Get Profile API:

    curl -X GET "http://localhost:3000/v1/profile" -H "accept: application/json"

Post Profile API:

    curl -X POST "http://localhost:3000/v1/profile" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"name\": \"Rishabh\", \"age\": 27, \"employeeId\": 1820, \"hobbies\": [ \"Cricket\" ]}"

Technologies/Packages Used:
1) Typescript - Maintains code in better way and helps us to remove compile time errors.
2) Express - Used for API Setup
3) JOI - Schema/ Request Body Validation with request or for any inside the code.
4) Mocha - Used for Running the test cases developed.
5) Sinon - Used for stubbing and fake calling function for Unit test
6) Istanbul - Used for getting the code coverage report(HTML Report) with full details
7) Swagger - for API documentation of end points
8) Winston - Used for Logging(Created in utils/log.ts)
9) Tslint - Linting and code quality errors/warnings
10) Docker File - For creating docker image and running containers
11) Functional Documentation - Jsoc (function level documentation)
12) Husky - For Precommit Assertions like linting, test cases running
13) .env - For keeping secured tokens 